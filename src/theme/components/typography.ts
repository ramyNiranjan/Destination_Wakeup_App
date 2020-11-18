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
  color: ${theme.neutral_1};
`

export const textProps = css`
  ${propStyling<TypographyProps>({
    primary: `color: ${theme.primary.color}`,
    accent: `color: ${theme.accent_1.color}`,
    light: `color: ${theme.neutral_2}`,
    // bold: `font-family: ${theme.fonts.bold}`,
  })}
  ${({ color }) => color && `color: ${color}`}
`

export const CustomText: TypographyComponent = styled(Text)`
  ${textBase}
  ${textProps}
`

export const InfoText: TypographyComponent = styled(CustomText)`
  font-size: ${18 * fontSizeMultiplier};
  ${textProps}
`

export const Meta: TypographyComponent = styled(CustomText)`
  font-size: ${12 * fontSizeMultiplier};
  ${textProps}
`

export const Title1: TypographyComponent = styled(CustomText)`
  font-size: ${28 * fontSizeMultiplier};
  ${textProps}
`

export const Title2: TypographyComponent = styled(CustomText)`
  font-size: ${22 * fontSizeMultiplier};
  ${textProps}
`

export const Headline1: TypographyComponent = styled(CustomText)`
  font-size: ${30 * fontSizeMultiplier};
  letter-spacing: ${-0.24 * fontSizeMultiplier};
  ${textProps}
`

export const Headline2: TypographyComponent = styled(CustomText)`
  font-size: ${25 * fontSizeMultiplier};
  letter-spacing: ${-0.24 * fontSizeMultiplier};
  ${textProps}
`

export const Headline3: TypographyComponent = styled(CustomText)`
  font-size: ${14 * fontSizeMultiplier};
  ${textProps}
`

export const Body1: TypographyComponent = styled(CustomText)`
  font-size: ${16 * fontSizeMultiplier};
  line-height: ${16 * fontSizeMultiplier * 1.474};
  ${textProps}
`

export const Body2: TypographyComponent = styled(CustomText)`
  font-size: ${14 * fontSizeMultiplier};
  line-height: ${14 * fontSizeMultiplier * 1.474};
  ${textProps}
`

export const Body3: TypographyComponent = styled(CustomText)`
  font-size: ${12 * fontSizeMultiplier};
  line-height: ${12 * fontSizeMultiplier * 1.474};
  ${textProps}
`
