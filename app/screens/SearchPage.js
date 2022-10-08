/* eslint-disable react-hooks/exhaustive-deps */
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCities} from '../store/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Sizes} from '../utils/CommonStyles';

const SearchPage = props => {
  const dispatch = useDispatch();
  const {onClose, onSelectCityTab} = props;
  const countriesData = useSelector(state => state.countries?.data);
  const citiesData = useSelector(state => state.cities?.data);
  console.log('=====cities===> ', citiesData);
  const [inputText, setInputText] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [cityInput, setCityInput] = useState('');
  const [filteredCities, setFilteredCities] = useState(null);
  useEffect(() => {
    // code here
    handleFetchCitiesByCountry('IN');
  }, []);

  const handleFetchCitiesByCountry = code => {
    dispatch(fetchCities());
  };

  useEffect(() => {
    handleCountriesData(inputText);
  }, [inputText]);

  const handleCountriesData = input => {
    if (input?.length >= 3) {
      const filterData = countriesData?.filter(el => el?.name.includes(input));
      setFilteredCountries(filterData);
    }
  };

  useEffect(() => {
    handleCitiesData(cityInput);
  }, [cityInput]);

  const handleCitiesData = input => {
    if (input?.length >= 3) {
      const filterData = citiesData?.filter(el => el?.name.includes(input));
      setFilteredCities(filterData);
    }
  };

  const handleInput = val => {
    setInputText(val);
  };

  const handleCityInput = val => {
    setCityInput(val);
  };

  const renderCountryTab = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.countryTab}
        onPress={() => handleGetCities(item)}>
        <Text style={styles.countryText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderCityTab = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.countryTab}
        onPress={() => onSelectCity(item)}>
        <Text style={styles.countryText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const onSelectCity = city => {
    onSelectCityTab(city);
    setToInitialState();
    onClose();
  };

  const setToInitialState = () => {
    setFilteredCountries();
    setSelectedCountry(null);
    setInputText('');
  };

  const handleGetCities = country => {
    setSelectedCountry(country);
    dispatch(fetchCities(country?.isoCode));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onClose()}>
          <Icon name="close" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>
      {!selectedCountry ? (
        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder={'Search country'}
            value={inputText}
            onChangeText={handleInput}
          />
        </View>
      ) : (
        <View style={styles.selectedCountryContainer}>
          <Text style={styles.selectedCountryText}>
            {selectedCountry?.name}
          </Text>
          <TouchableOpacity onPress={() => setSelectedCountry(null)}>
            <Icon name="md-trash" size={20} color={'red'} />
          </TouchableOpacity>
        </View>
      )}
      {!selectedCountry &&
      filteredCountries &&
      filteredCountries?.length > 0 ? (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Countries: </Text>
          <FlatList data={filteredCountries} renderItem={renderCountryTab} />
        </View>
      ) : undefined}

      {selectedCountry && citiesData && citiesData?.length > 0 ? (
        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder={'Search city'}
            value={cityInput}
            onChangeText={handleCityInput}
          />
        </View>
      ) : undefined}

      {selectedCountry && filteredCities && filteredCities?.length > 0 ? (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Cities: </Text>
          <FlatList data={filteredCities} renderItem={renderCityTab} />
        </View>
      ) : undefined}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 70,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: Sizes.tiny,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    height: 50,
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.secondaryblack,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
  listTitle: {
    fontSize: Sizes.large,
    fontWeight: '600',
    color: Colors.grey,
    marginBottom: Sizes.tiny,
  },
  countryTab: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  countryText: {},

  selectedCountryContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Sizes.small,
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  selectedCountryText: {
    fontSize: Sizes.large,
    fontWeight: '600',
  },
});
