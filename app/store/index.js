import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'remote-redux-devtools';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import {createLogger} from 'redux-logger';

const PERSIST_KEY = 'root';
const middleware = [];

/* ------------- React Native Offline ------------- */
/* ------------- Thunk Middleware ------------- */
middleware.push(thunk);

/* ------------- Redux Logger Middleware ------------- */
if (__DEV__) {
  middleware.push(createLogger());
}

/* ------------- Persisted Config ------------- */
const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,

  whitelist: ['userLocation'], // things need to save in storage
  debug: __DEV__,
};
/* ------------- Persisted reducer with config ------------- */
const finalReducers = persistReducer(persistConfig, reducers);

/* ------------- Store ------------- */
const store = createStore(finalReducers, applyMiddleware(...middleware));
/* ------------- Persistor ------------- */
export const persistor = persistStore(store);

export default store;
