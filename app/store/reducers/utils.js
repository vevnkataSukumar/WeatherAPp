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
  IS_LOADING_CURENT_LOCATION_WEATHER_DATA,
  SET_CURENT_LOCATION_WEATHER_DATA,
  CLEAR_CURENT_LOCATION_WEATHER_DATA,
  IS_LOADING_CURENT_LOCATION_FORECAST_DATA,
  SET_CURENT_LOCATION_FORECAST_DATA,
  CLEAR_CURENT_LOCATION_FORECAST_DATA,
} from '../actions';

const InitialState = {
  data: [],
  isLoading: false,
  error: new Error(),
};

export const countriesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case IS_LOADING_COUNTRIES:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CLEAR_COUNTRIES:
      return {
        ...state,
        data: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export const citiesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case IS_LOADING_CITIES:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_CITIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CLEAR_CITIES:
      return {
        ...state,
        data: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export const userLocationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case IS_LOADING_USER_LOCATION:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case REMOVE_USER_LOCATION:
      return {
        ...state,
        data: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export const currentLocationWeatherDataReducer = (
  state = InitialState,
  action,
) => {
  switch (action.type) {
    case IS_LOADING_CURENT_LOCATION_WEATHER_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_CURENT_LOCATION_WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CLEAR_CURENT_LOCATION_WEATHER_DATA:
      return {
        ...state,
        data: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export const currentLocationForecastWeatherDataReducer = (
  state = InitialState,
  action,
) => {
  switch (action.type) {
    case IS_LOADING_CURENT_LOCATION_FORECAST_DATA:
      return {
        ...state,
        isLading: action.payload,
      };
    case SET_CURENT_LOCATION_FORECAST_DATA:
      return {
        ...state,
        data: action.payload,
        isLading: false,
      };
    case CLEAR_CURENT_LOCATION_FORECAST_DATA:
      return {
        ...state,
        data: [],
        isLading: false,
      };
    default:
      return state;
  }
};
