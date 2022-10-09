import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../utils/CommonStyles';

const SearchBox = props => {
  const {onBoxClick, selectedCity} = props;

  const City = selectedCity || 'Search by City';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onBoxClick()} style={styles.inputBox}>
        <View style={styles.inputContainer}>
          <Text style={styles.placeholdettext}>{City}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchBy: {
    color: Colors.white,
    fontSize: 12,
    marginRight: 10,
  },
  initialText: {
    color: Colors.secondaryblack,
    fontSize: 18,
    marginRight: 10,
  },
  selectedInitialText: {
    color: Colors.white,
    fontSize: 18,
    marginRight: 10,
  },
  inputBox: {
    alignSelf: 'stretch',
    position: 'relative',
  },
  inputContainer: {
    height: 50,
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  placeholdettext: {
    color: Colors.grey,
  },
  searchBtn: {
    height: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    bottom: 5,
    right: 0,
  },
  searchText: {
    fontSize: Sizes.large,
    color: Colors.textLight,
    fontWeight: '600',
  },
});
