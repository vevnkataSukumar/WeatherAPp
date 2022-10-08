import {StyleSheet} from 'react-native';

const Colors = {
  white: '#FFFFFF',
};

const Sizes = {
  tooTiny: 8,
  tiny: 10,
  small: 12,
  medium: 14,
  large: 16,
  extraLarge: 18,
  tooLarge: 20,
  big: 24,
  tooBig: 28,
  veryBig: 50,
};

const CommonStyles = StyleSheet.create({
  flex_stretch: {
    flex: 1,
    alignSelf: 'stretch',
  },
  alignSelf_stretch: {
    alignSelf: 'stretch',
  },
  box_center: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin_bottom_10: {
    marginBottom: Sizes.tiny,
  },
});

const CommonTextStyles = StyleSheet.create({
  whiteText: {
    color: Colors.white,
  },
  White_Big_Text_Bold: {
    fontSize: Sizes.veryBig,
    color: Colors.white,
    fontWeight: '600',
  },
});

export {Colors, Sizes, CommonStyles, CommonTextStyles};
