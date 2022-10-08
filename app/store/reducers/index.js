import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import {
  citiesReducer as cities,
  countriesReducer as countries,
  userLocationReducer as userLocation,
  currentLocationWeatherDataReducer as currentLocationWeatherData,
  currentLocationForecastWeatherDataReducer as currentLocationForecastData,
} from './utils';

const appReducer = combineReducers({
  network,
  cities,
  countries,
  userLocation,
  currentLocationWeatherData,
  currentLocationForecastData,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
