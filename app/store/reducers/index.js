import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import {
  citiesReducer as cities,
  countriesReducer as countries,
  userLocationReducer as userLocation,
  currentLocationForecastWeatherDataReducer as currentLocationForecastData,
} from './utils';

const appReducer = combineReducers({
  network,
  cities,
  countries,
  userLocation,
  currentLocationForecastData,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
