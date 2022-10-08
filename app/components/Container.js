import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {BGColors} from '../utils';

const Container = props => {
  return (
    <LinearGradient colors={BGColors} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
