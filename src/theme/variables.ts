import { getBottomSpace } from 'react-native-iphone-x-helper'

// Configurable app-wide styling variables
export const baseline = 8
export const fontSizeMultiplier = 1
export const spacingMultiplier = 1

export const touchableActiveOpacity = 0.8
export const screenContainerPadding = baseline * 2

const boxShadowDefault = {
  shadowColor: 'rgba(9, 16, 95, 0.24)',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
}

export const boxShadowLarge = {
  shadowColor: 'rgba(9, 16, 95, 0.4)',
  ...boxShadowDefault,
  shadowRadius: 8,
  elevation: 8,
}

export const boxShadowMedium = {
  ...boxShadowDefault,
  shadowRadius: 4,
  elevation: 4,
}

export function getBottomScreenSpace(): number {
  return getBottomSpace() || baseline * 2
}
