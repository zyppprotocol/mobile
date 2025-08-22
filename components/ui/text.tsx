import { useThemeColor } from '@/hooks/useThemeColor';
import { font } from '@/theme/font';
import { FONT_SIZE } from '@/theme/globals';
import React, { forwardRef } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

type TextVariant =
  | 'body'
  | 'title'
  | 'subtitle'
  | 'caption'
  | 'heading'
  | 'link';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  lightColor?: string;
  darkColor?: string;
  children: React.ReactNode;
}

export const Text = forwardRef<RNText, TextProps>(
  (
    { variant = 'body', lightColor, darkColor, style, children, ...props },
    ref
  ) => {
    const textColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      'text'
    );
    const mutedColor = useThemeColor({}, 'textMuted');

    const getTextStyle = (): TextStyle => {
      const baseStyle: TextStyle = {
        color: textColor,
      };

      switch (variant) {
        case 'heading':
          return {
            ...baseStyle,
            fontSize: 28,
            fontFamily: String(font.extraBold)
          };
        case 'title':
          return {
            ...baseStyle,
            fontSize: 24,
            fontFamily: String(font.semiBold),
          };
        case 'subtitle':
          return {
            ...baseStyle,
            fontSize: 19,
            fontFamily: String(font.semiBold),
          };
        case 'caption':
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontFamily: String(font.regular),
            color: mutedColor,
          };
        case 'link':
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontFamily: String(font.medium),
            textDecorationLine: 'underline',
          };
        default: // 'body'
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontFamily: String(font.regular),
          };
      }
    };

    return (
      <RNText ref={ref} style={[getTextStyle(), style]} {...props}>
        {children}
      </RNText>
    );
  }
);
