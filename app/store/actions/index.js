// imports
import axios from 'axios';
import GetLocation from 'react-native-get-location';
import {Country, City} from 'country-state-city';
import {
  IS_LOADING_COUNTRIES,
  SET_COUNTRIES,
  CLEAR_COUNTRIES,
  IS_LOADING_CITIES,
  SET_CITIES,
  CLEAR_CITIES,
  IS_LOADING_USER_LOCATION,
  SET_USER_LOCATION,
  REMOVE_USER_LOCATION,
  IS_LOADING_CURENT_LOCATION_FORECAST_DATA,
  SET_CURENT_LOCATION_FORECAST_DATA,
  CLEAR_CURENT_LOCATION_FORECAST_DATA,
} from './types';
import {BASE_URL, API_KEY} from '../../constants/apiConstants';

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
