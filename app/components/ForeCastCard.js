import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getDayfromDate} from '../utils';
import {Sizes} from '../utils/CommonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ForeCastCard = props => {
  const {data} = props;
  const day = getDayfromDate(data?.date);
  const status = data?.day?.condition?.text;
  const temp = data?.day?.avgtemp_c;
  const tempFarn = data?.day?.avgtemp_f;

  return (
    <View style={styles.card}>
      <Text style={styles.dayText}>{day}</Text>
      <View style={styles.statusBox}>
        <Icon name="partly-sunny" size={20} color={'#FF6666'} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <View style={styles.tempBox}>
        <Text style={styles.tempText}>{`${temp}° C`}</Text>
        <Text style={styles.farenText}>Fahren {`${tempFarn}° F`}</Text>
      </View>
    </View>
  );
};

export default ForeCastCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DEEBEE',
    marginBottom: 16,
  },
  dayText: {
    fontSize: Sizes.big,
    color: '#333333',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: Sizes.small,
    marginLeft: Sizes.tooTiny,
  },
  tempBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: Sizes.tooLarge,
    fontWeight: '600',
  },
  farenText: {
    fontSize: Sizes.small,
  },
});
