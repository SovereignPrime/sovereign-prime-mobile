import { AlignTheme } from './Theme.interface';

export const DEFAULT_ALIGN_THEME: AlignTheme = {
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexColLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  flexColCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexColBetween: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRowEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};
