// imports
import axios from 'axios';
import GetLocation from 'react-native-get-location';
import {Country, City} from 'country-state-city';

const BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = 'd7719f5b60be4b85bef121629220510';

export const IS_LOADING_COUNTRIES = 'IS_LOADING_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const CLEAR_COUNTRIES = 'IS_LOADING_COUNTRIES';

export const fetchCountries = () => async dispatch => {
  dispatch({
    type: IS_LOADING_COUNTRIES,
    payload: true,
  });
  try {
    const countries = await Country.getAllCountries();
    dispatch({
      type: SET_COUNTRIES,
      payload: countries,
    });
  } catch (error) {
    dispatch({
      type: CLEAR_COUNTRIES,
    });
  } finally {
    dispatch({
      type: IS_LOADING_COUNTRIES,
      payload: false,
    });
  }
};

export const IS_LOADING_CITIES = 'IS_LOADING_CITIES';
export const SET_CITIES = 'SET_CITIES';
export const CLEAR_CITIES = 'IS_LOADING_CITIES';

export const fetchCities = countryCode => async dispatch => {
  dispatch({
    type: IS_LOADING_CITIES,
    payload: true,
  });
  try {
    const countries = await City.getCitiesOfCountry(countryCode);
    dispatch({
      type: SET_CITIES,
      payload: countries,
    });
  } catch (error) {
    dispatch({
      type: CLEAR_CITIES,
    });
  } finally {
    dispatch({
      type: IS_LOADING_COUNTRIES,
      payload: false,
    });
  }
};

export const IS_LOADING_USER_LOCATION = 'IS_LOADING_USER_LOCATION';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const REMOVE_USER_LOCATION = 'REMOVE_USER_LOCATION';

export const IS_LOADING_CURENT_LOCATION_WEATHER_DATA =
  'IS_LOADING_CURENT_LOCATION_WEATHER_DATA';
export const SET_CURENT_LOCATION_WEATHER_DATA =
  'SET_CURENT_LOCATION_WEATHER_DATA';
export const CLEAR_CURENT_LOCATION_WEATHER_DATA =
  'CLEAR_CURENT_LOCATION_WEATHER_DATA';

export const IS_LOADING_CURENT_LOCATION_FORECAST_DATA =
  'IS_LOADING_CURENT_LOCATION_FORECAST_DATA';
export const SET_CURENT_LOCATION_FORECAST_DATA =
  'SET_CURENT_LOCATION_FORECAST_DATA';
export const CLEAR_CURENT_LOCATION_FORECAST_DATA =
  'CLEAR_CURENT_LOCATION_FORECAST_DATA';

export const isLoadingUserLocation = isLoading => ({
  type: IS_LOADING_USER_LOCATION,
  payload: isLoading,
});
export const setUserLocation = data => ({
  type: SET_USER_LOCATION,
  payload: data,
});

export const removeUserLocation = () => ({
  type: REMOVE_USER_LOCATION,
});

export const fetchUserLocation = () => dispatch => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      dispatch(setUserLocation(location));
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
      dispatch(removeUserLocation());
    });
};

export const loadingCurrentWeatherData = isLoading => ({
  type: IS_LOADING_CURENT_LOCATION_WEATHER_DATA,
  payload: isLoading,
});

export const setCurrentWeatherData = data => ({
  type: SET_CURENT_LOCATION_WEATHER_DATA,
  payload: data,
});

export const clearCurrentWeatherData = () => ({
  type: CLEAR_CURENT_LOCATION_WEATHER_DATA,
});

export const fetchUserLocationWeatherData = (lat, lang) => async dispatch => {
  dispatch(loadingCurrentWeatherData(true));
  try {
    const currentWeatherUrl = `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lang}&days=10&aqi=no&alerts=no`;
    let response = await axios.get(currentWeatherUrl);
    if (response.status === 200) {
      dispatch(setCurrentWeatherData(response?.data));
    }
    // fetch forecast data
    dispatch(fetchUserLocationForecastWeatherData(lat, lang));
  } catch (error) {
    dispatch(clearCurrentWeatherData());
  } finally {
    dispatch(loadingCurrentWeatherData(false));
  }
};

export const fetchUserLocationWeatherDataByCity =
  searchText => async dispatch => {
    dispatch(isLoadingUserLocation(true));
    console.log('search test: Query', searchText);
    try {
      const currentWeatherUrl = `${BASE_URL}/search.json?key=${API_KEY}&q=${searchText}`;
      let response = await axios.get(currentWeatherUrl);
      console.log('search test: Success', response);
      if (response.status === 200) {
        const location = response?.data?.[0];
        const updatedLocationData = {
          ...location,
          latitude: location?.lat,
          longitude: location?.lon,
        };
        dispatch(setUserLocation(updatedLocationData));
      }
    } catch (error) {
      console.log('search test: Error: ', error?.response);
      dispatch(removeUserLocation());
    } finally {
      dispatch(isLoadingUserLocation(false));
    }
  };

export const loadingCurrentLocationForecastData = isLoading => ({
  type: IS_LOADING_CURENT_LOCATION_FORECAST_DATA,
  payload: isLoading,
});

export const setCurrentLocationForecastData = data => ({
  type: SET_CURENT_LOCATION_FORECAST_DATA,
  payload: data,
});

export const clearCurrentLocationForecastData = () => ({
  type: CLEAR_CURENT_LOCATION_FORECAST_DATA,
});

export const fetchUserLocationForecastWeatherData =
  (lat, lang) => async dispatch => {
    dispatch(loadingCurrentLocationForecastData(true));
    try {
      const forecastWeatherUrl = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lang}&days=10&aqi=no&alerts=no`;
      let response = await axios.get(forecastWeatherUrl);
      if (response.status === 200) {
        dispatch(setCurrentLocationForecastData(response?.data));
      }
    } catch (error) {
      dispatch(clearCurrentLocationForecastData());
    } finally {
      dispatch(loadingCurrentLocationForecastData(false));
    }
  };
