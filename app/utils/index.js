import {Platform} from 'react-native';

export const isIos = () => {
  return Platform.OS === 'ios';
};

export const SearchTypes = [
  {
    id: 1,
    key: 'city',
    name: 'City',
  },
  // {
  //   id: 2,
  //   key: 'postal',
  //   name: 'Postal Code',
  // },
];

export const BGColors = [
  '#264f86',
  '#477C9D',
  '#67A2B3',
  '#6CA7B6',
  '#9AC2C8',
  '#B7CDD3',
];

export const dayData = [
  {
    id: 0,
    value: 0,
    label: 'Sun',
  },
  {
    id: 1,
    value: 1,
    label: 'Mon',
  },
  {
    id: 2,
    value: 2,
    label: 'Tue',
  },
  {
    id: 3,
    value: 3,
    label: 'Wed',
  },
  {
    id: 4,
    value: 4,
    label: 'Thu',
  },
  {
    id: 5,
    value: 5,
    label: 'Fri',
  },
  {
    id: 6,
    value: 6,
    label: 'Sat',
  },
];

export const getDayfromDate = time => {
  if (!time) {
    return dayData[0].label;
  }
  const newDate = new Date(time);
  const dayValue = newDate.getDay() || 0;
  return dayData?.[dayValue].label;
};

export function funcDebounce(func, timeOut = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeOut);
  };
}
