import { Theme } from './Theme.interface';
import { DEFAULT_ALIGN_THEME } from './Align.theme';
import { DEFAULT_COLOR_THEME } from './Color.theme';
import { DEFAULT_FONT_THEME } from './Font.theme';
import { DEFAULT_SPACING_THEME } from './Spacing.theme';
import { DEFAULT_BOX_THEME } from './Box.theme';

export const DEFAULT_THEME_ID = 'DEFAULT_THEME';
const DEFAULT_THEME: Theme = {
  id: DEFAULT_THEME_ID,
  align: DEFAULT_ALIGN_THEME,
  color: DEFAULT_COLOR_THEME,
  font: DEFAULT_FONT_THEME,
  spacing: DEFAULT_SPACING_THEME,
  box: DEFAULT_BOX_THEME,
};

export default DEFAULT_THEME;
