import styled, { css } from 'styled-components/native'
import theme from '../../../theme'
import { Headline2 } from '../../../theme/components/typography'

const containerDefault = css`
  background-color: ${({ variant, disabled }) => disabled ? theme.neutral_4 : theme[variant].color};
`

const containerOutline = css`
  background-color: transparent;
  border-width: 2; 
  border-color: ${({ disabled, variant }) => disabled ? theme.neutral_4 : theme[variant].color}
`

const containerText = css`
  background-color: transparent;
`

export const buttonHeight = 48

export const Container = styled.View`
  border-radius: 11;
  align-items: center;
  justify-content: center;
  height: ${buttonHeight};

  ${({ type }) => type === 'default' && containerDefault}
  ${({ type }) => type === 'outline' && containerOutline}
  ${({ type }) => type === 'text' && containerText}
`

const titleDefault = css`
  color: ${({ variant, disabled }) => disabled ? theme.neutral_7 : theme[variant].onColor};
`

const titleOutline = css`
  color: ${({ variant, disabled }) => disabled ? theme.neutral_4 : theme[variant].color};
`

const titleText = css`
  color: ${({ variant, disabled }) => disabled ? theme.neutral_4 : theme[variant].color};
`

export const Title = styled(Headline2)`
  text-align: center;

  ${({ type }) => type === 'default' && titleDefault}
  ${({ type }) => type === 'outline' && titleOutline}
  ${({ type }) => type === 'text' && titleText}
`
