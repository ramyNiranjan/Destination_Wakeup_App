import { FunctionComponent } from 'react'
import { TextProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Text } from 'styled-native-kit'
import theme from '..'
import { fontSizeMultiplier } from '../variables'
import { propStyling } from './base'

export type ThemeColorProps = {
  primary?: boolean | string
  primaryLight?: boolean | string
  secondary?: boolean | string
  accent?: boolean | string
  primaryVariant?: boolean | string
}

export type TypographyProps = {
  light?: boolean | string
  centered?: boolean | string
  bold?: boolean | string
  uppercase?: boolean | string
  lowercase?: boolean | string
  color?: string
  as?: any
} & ThemeColorProps

export type TypographyComponent<T = {}> = FunctionComponent<
  TextProps & TypographyProps & T
>

export type LabelProps = { small?: boolean | string }

/* font-family: ${theme.fonts.regular}; */
export const textBase = css`
  color: ${theme.background.onColor};
`

export const textProps = css`
  ${propStyling<TypographyProps>({
    primary: `color: ${theme.primary.onColor}`,
    primaryLight: `color: ${theme.primary_variant.color}`,
    secondary: `color: ${theme.secondary.onColor}`,
    accent: `color: ${theme.accent.onColor}`,
    // bold: `font-family: ${theme.fonts.bold}`,
  })}
  ${({ color }) => color && `color: ${color}`}
`

export const CustomText: TypographyComponent = styled(Text)`
  ${textBase}
  ${textProps}
`

export const Paragraph: TypographyComponent = styled(CustomText)`
  font-size: ${16 * fontSizeMultiplier};
  line-height: ${16 * fontSizeMultiplier * 1.3};
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const Label: TypographyComponent<LabelProps> = styled(CustomText)`
  font-size: ${16 * fontSizeMultiplier};
  ${textProps}
  ${propStyling<LabelProps>({
    small: 'font-size: 12',
  })}
`

export const InfoText: TypographyComponent = styled(CustomText)`
  font-size: ${14 * fontSizeMultiplier};
  ${textProps}
`

export const Meta: TypographyComponent = styled(CustomText)`
  font-size: ${12 * fontSizeMultiplier};
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const Heading1: TypographyComponent = styled(CustomText)`
  font-size: ${22 * fontSizeMultiplier};
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const Heading2: TypographyComponent = styled(CustomText)`
  font-size: ${20 * fontSizeMultiplier};
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const Heading3: TypographyComponent = styled(CustomText)`
  font-size: ${18 * fontSizeMultiplier};
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const Heading4: TypographyComponent = styled(CustomText)`
  font-size: ${16 * fontSizeMultiplier};
  ${textProps}
`

export const Heading5: TypographyComponent = styled(CustomText)`
  ${textProps}
`

export const Heading6: TypographyComponent = styled(CustomText)`
  ${textProps}
`

/* font-family: ${theme.fonts.bold}; */
export const InputErrorText: TypographyComponent = styled(CustomText)`
  color: ${theme.error};
  font-size: 10;
  ${textProps}
`
