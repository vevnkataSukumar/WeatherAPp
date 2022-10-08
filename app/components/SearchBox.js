import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Sizes} from '../utils/CommonStyles';

const SearchBox = props => {
  const {onBoxClick, selectedCity} = props;

  const City = selectedCity || 'Search by City / Postal Code';
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
    color: '#FFF',
    fontSize: 12,
    marginRight: 10,
  },
  initialText: {
    color: '#CCC',
    fontSize: 18,
    marginRight: 10,
  },
  selectedInitialText: {
    color: '#FFF',
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
    backgroundColor: '#FFFFFF',
  },
  placeholdettext: {
    color: 'grey',
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
    color: '#0366A1',
    fontWeight: '600',
  },
});

// const [inputValue, setInputValue] = useState('');
// const [searchType, setSearchType] = useState('city');

// const handleInput = val => {
//   setInputValue(val);
// };

// useEffect(() => {
//   onChangeSearchType(searchType);
// }, []);

// const handleSearchType = val => {
//   setSearchType(val);
//   if (onChangeSearchType) {
//     onChangeSearchType(val);
//   }
// };

// const handleSearchClick = () => {
//   onBoxClick();
// if (onSearchClicked) {
//   onSearchClicked(inputValue);
// }
// };

// {/* <View style={styles.searchBox}>
//   <Text style={styles.searchBy}>Search By: </Text>
//   <View style={styles.searchBox}>
//     {SearchTypes?.map(el => (
//       <Text
//         style={
//           el.key === searchType
//             ? styles.selectedInitialText
//             : styles.initialText
//         }
//         onPress={() => handleSearchType(el.key)}>
//         {el?.name}
//       </Text>
//     ))}
//   </View>
// </View> */}
// import {SearchTypes} from '../utils';

// {
//   /* <TextInput
//           style={styles.inputContainer}
//           placeholder={'Search by City / Postal Code'}
//           value={inputValue}
//           onChangeText={handleInput}
//         /> */
// }
// {
//   /* {inputValue && inputValue?.length > 3 ? (
//           <TouchableOpacity
//             style={styles.searchBtn}
//             onPress={handleSearchClick}>
//             <Text style={styles.searchText}>Search</Text>
//           </TouchableOpacity>
//         ) : undefined} */
// }
