import {StyleSheet, View, NativeModules} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './store/index';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation';
if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
