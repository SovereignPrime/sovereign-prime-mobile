import { DEFAULT_THEME_CONSTANTS } from './Constants.theme';
import { ColorTheme } from './Theme.interface';

export const DEFAULT_COLOR_THEME: ColorTheme = {
  primary: DEFAULT_THEME_CONSTANTS.color.black as string,
  secondary: DEFAULT_THEME_CONSTANTS.color.white as string,
  backgroundPrimary: '#D2D2D2',
  backgroundSecondary: DEFAULT_THEME_CONSTANTS.color.silversand as string,
  background01: DEFAULT_THEME_CONSTANTS.color.milkwhite as string,
  background02: DEFAULT_THEME_CONSTANTS.color.greenwhite as string,
  background03: DEFAULT_THEME_CONSTANTS.color.rubyred as string,
  font01: DEFAULT_THEME_CONSTANTS.color.greycloud as string,
  borderPrimary: DEFAULT_THEME_CONSTANTS.color.mercury as string,
  btn01: DEFAULT_THEME_CONSTANTS.color.honeysuckle as string,
  link: DEFAULT_THEME_CONSTANTS.color.butterfly as string,
};
