import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../theme';

export default {
  render() {
    const {
      center,
      right,
      color,
      size,
      name,
      welcome,
      height,
      weight,
      spacing,
      caption,
      medium,
      bold,
      light,
      italic,
      button,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      welcome && styles.welcome,
      name && styles.name,
      button && styles.button,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'blue' && styles.accent,
      color && color === 'black' && styles.black,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      caption && styles.caption,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  bold: { fontFamily: 'Rubik-Bold' },
  light: { fontFamily: 'Rubik-Light' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  red: { color: theme.colors.red, },
  yellow: { color: theme.colors.yellow, },
  teal: { color: theme.colors.teal, },
  black: { color: theme.colors.black, },
  white: { color: theme.colors.white, },
  gray: { color: theme.colors.gray, },

  caption: { color: theme.colors.caption, },
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  h4: theme.fonts.h4,
  paragraph: theme.fonts.paragraph,
  paragraphGray: theme.fonts.paragraphGray,
  paragraphGray2: theme.fonts.paragraphGray2,
  caption: theme.fonts.caption,
  captionMedium: theme.fonts.captionMedium,
  button: theme.fonts.button,
});