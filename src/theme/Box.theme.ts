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
};
