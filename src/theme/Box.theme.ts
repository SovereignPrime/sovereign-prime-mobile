import { BoxTheme } from './Theme.interface';
import { DEFAULT_THEME_CONSTANTS } from './Constants.theme';

export const DEFAULT_BOX_THEME: BoxTheme = {
  /**
   * input boxes
   */
  fullWidthInput: {
    width: '100%',
    borderRadius: DEFAULT_THEME_CONSTANTS.borderRadius.normal as number,
    borderWidth: 0.5,
  },
  /**
   * button boxes
   */
  button: {
    borderRadius: DEFAULT_THEME_CONSTANTS.borderRadius.normal as number,
    borderWidth: 0.5,
  },
  buttonSmall: {
    paddingVertical: 7,
    borderWidth: 2,
    borderColor: DEFAULT_THEME_CONSTANTS.color.mercury as string,
  },
  /**
   * card boxes
   */
  card: {
    borderWidth: 0.5,
    borderColor: DEFAULT_THEME_CONSTANTS.color.iron as string,
    shadowColor: DEFAULT_THEME_CONSTANTS.color.black as string,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    backgroundColor: DEFAULT_THEME_CONSTANTS.color.white as string,
  },
  /**
   * icon
   */
  unreadIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: DEFAULT_THEME_CONSTANTS.color.rubyred as string,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
  },
};
