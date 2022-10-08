import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonStyles, CommonTextStyles} from '../utils/CommonStyles';

const WeatherBox = props => {
  const {locationData, weatherData} = props;
  const City = locationData?.name || 'City Here';
  const Temparature = weatherData?.temp_c || '27';
  const WeatherStatus = weatherData?.condition?.text || 'Status here!';
  return (
    <View style={styles.container}>
      <View style={CommonStyles.box_center}>
        <Text
          style={[CommonTextStyles.whiteText, CommonStyles.margin_bottom_10]}>
          {City}
        </Text>
        <View>
          <Text
            style={
              CommonTextStyles.White_Big_Text_Bold
            }>{`${Temparature}° C`}</Text>
        </View>
        <Text style={CommonTextStyles.whiteText}>{WeatherStatus}</Text>
      </View>
    </View>
  );
};

export default WeatherBox;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  otherDetailsBox: {},
});
