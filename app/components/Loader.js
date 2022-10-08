import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../utils/CommonStyles';

const Loader = ({isLoading}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={Colors.white} />
      </View>
    );
  }

  return undefined;
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    zIndex: 999,
    elevation: 30,
  },
});
