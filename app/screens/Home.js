/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Modal} from 'react-native';
import {
  Container,
  SearchBox,
  WeatherBox,
  ForeCastBox,
  Loader,
} from '../components';
import {
  fetchCountries,
  fetchUserLocation,
  fetchUserLocationWeatherData,
} from '../store/actions';
import {DEFAULT_LAG, DEFAULT_LAT} from '../constants';
import SearchPage from './SearchPage';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [showModal, setModalVisibility] = useState(false);
  const [citySelected, setCitySelected] = useState(null);
  const {data: countries} = useSelector(state => state.countries);
  const {isLoading: loadingLocation, data: userLocation} = useSelector(
    state => state.userLocation,
  );
  const {isLoading: loading, data: locationWeatherData} = useSelector(
    state => state.currentLocationForecastData,
  );

  useEffect(() => {
    if (countries && countries?.length <= 0) {
      dispatch(fetchCountries());
    }
    dispatch(fetchUserLocation());
  }, []);

  useEffect(() => {
    handleCurrentWeatherDataFetch(
      userLocation?.latitude,
      userLocation?.longitude,
    );
  }, [userLocation]);

  const handleCurrentWeatherDataFetch = (lat, lag) => {
    const locationLat = lat || DEFAULT_LAT;
    const locationLag = lag || DEFAULT_LAG;
    dispatch(fetchUserLocationWeatherData(locationLat, locationLag));
  };

  function handleOnSelectCity(city) {
    setCitySelected(city?.name);
    setLoader(true);
    handleCurrentWeatherDataFetch(city?.latitude, city?.longitude);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }

  const handleModalVisibility = () => {
    setModalVisibility(!showModal);
  };

  return (
    <Container containerStyle={styles.container}>
      <Loader isLoading={loading || loadingLocation || loader} />
      <SearchBox
        selectedCity={citySelected}
        onBoxClick={handleModalVisibility}
      />
      <WeatherBox
        locationData={locationWeatherData?.location}
        weatherData={locationWeatherData?.current}
      />
      <ForeCastBox foreCastData={locationWeatherData?.forecast?.forecastday} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          handleModalVisibility();
        }}>
        <SearchPage
          onClose={() => handleModalVisibility()}
          onSelectCityTab={handleOnSelectCity}
        />
      </Modal>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});

// const [searchType, setSearchType] = useState(null);
// const [searchByVal, setSearchByValue] = useState(null);

// const handleSearchByCityOrPostalCode = searchVal => {
//   dispatch(fetchUserLocationWeatherDataByCity(searchByVal));
// };

// function handleSearchTypeChange(val) {
//   setSearchType(val);
// }

// function handleSearchClick(val) {
//   setSearchByValue(val);
//   setLoader(true);
//   if (searchType && val) {
//     funcDebounce(handleSearchByCityOrPostalCode(val), 300);
//   }
//   setTimeout(() => {
//     setLoader(false);
//   }, 2000);
// }
