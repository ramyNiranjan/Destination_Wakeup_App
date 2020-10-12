import { FunctionComponent } from 'react'
import { TouchableOpacity, ViewProps, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import theme from '..'
import { spacingMultiplier } from '../variables'

export type PropStylingConfig = { [key: string]: string }
export type PropStylingProps = { [key: string]: boolean }

export function propConditionalStyling(key, map) {
  return (props) => {
    if (!props[key]) return ''
    return map[props[key]]
  }
}

export function propStyling<T = PropStylingConfig>(config: T) {
  return (props: PropStylingProps) => {
    return Object.keys(props)
      .reduce(
        (acc, curr) =>
          config[curr] && !!props[curr] ? `${acc}${config[curr]};\n` : acc,
        ''
      )
      .trim()
  }
}

function getSpacing(propChar: 'w' | 'h') {
  return (props: { [key: string]: boolean | number }) => {
    if (props.exact) return props.exact

    const propKeys = Object.keys(props)
    const spacingProp = propKeys.find((p) => p[0] === propChar)

    if (!spacingProp) return 0

    const spacingValue = +spacingProp.substr(1)

    if (spacingValue % 4 !== 0) return 0

    return Math.round(spacingValue * spacingMultiplier)
  }
}

export const Space: FunctionComponent<
  ViewProps & {
    exact?: number
    h04?: boolean
    h08?: boolean
    h12?: boolean
    h16?: boolean
    h20?: boolean
    h24?: boolean
    h28?: boolean
    h32?: boolean
    h36?: boolean
    h40?: boolean
    h44?: boolean
    h48?: boolean
    w04?: boolean
    w08?: boolean
    w12?: boolean
    w16?: boolean
    w20?: boolean
    w24?: boolean
    w28?: boolean
    w32?: boolean
    w36?: boolean
    w40?: boolean
    w44?: boolean
    w48?: boolean
  }
> = styled.View`
  height: ${getSpacing('h')};
  width: ${getSpacing('w')};
`

export const Touchable: typeof TouchableOpacity = styled.TouchableOpacity.attrs(
  () => ({
    activeOpacity: theme.touchableActiveOpacity,
  })
)``

export const Card = styled.View`
  background-color: ${theme.background.color};
`

export const HorizontalScreenPadding = styled.View`
  ${({ noFlex }) => !noFlex && 'flex: 1'}
  padding: 0 ${theme.baseline * 2}px;
`

export const ScrollableScreenContainer = styled.ScrollView.attrs(() => ({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: theme.baseline * 2,
    paddingTop: theme.baseline * 4,
    paddingBottom: theme.baseline * 2,
  } as ViewStyle,
}))``
