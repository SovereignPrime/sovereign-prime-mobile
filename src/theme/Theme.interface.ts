import { ViewStyle } from 'react-native';

export interface Theme {
  id: string;
  align: AlignTheme;
  color: ColorTheme;
  font: FontTheme;
  spacing: SpacingTheme;
  box: BoxTheme;
}

export interface ColorTheme {
  [key: string]: string;
}

export interface FontTheme {
  [key: string]: FontType;
}

export interface AlignTheme {
  [key: string]: ViewStyle;
}

export interface SpacingTheme {
  [key: string]: ViewStyle;
}

export interface BoxTheme {
  [key: string]: ViewStyle;
}

interface FontType {
  fontSize?: number;
  letterSpacing?: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  fontFamily?: string;
}

const fontWeightList = [
  'normal',
  'bold',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;

type FontWeight = typeof fontWeightList[number];
