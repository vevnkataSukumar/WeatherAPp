import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ForeCastCard from './ForeCastCard';
import {CommonStyles} from '../utils/CommonStyles';

const ForeCast = props => {
  const {foreCastData} = props;

  const renderForecastCard = ({item, index}) => {
    return <ForeCastCard data={item} />;
  };

  function renderEmptyList() {
    return (
      <View>
        <Text>Empty List</Text>
      </View>
    );
  }

  function keyExtractor(item) {
    return item[0]?.day?.condition?.code.toString();
  }

  return (
    <View style={styles.container}>
      {foreCastData && foreCastData?.length > 0 ? (
        <FlatList
          data={foreCastData}
          renderItem={renderForecastCard}
          keyExtractor={keyExtractor}
          ListEmptyComponent={() => renderEmptyList()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={CommonStyles.alignSelf_stretch}
        />
      ) : undefined}
    </View>
  );
};

export default ForeCast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 16,
    marginHorizontal: 16,
  },
});
