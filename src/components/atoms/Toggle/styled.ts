import styled from 'styled-components/native'
import { StyleSheet, ViewStyle } from 'react-native'

export const Container = styled.TouchableOpacity``

export const Square = styled.View`
  height: 40;
  width: 40;
  background-color: ${({ active }) => (active ? 'green' : 'grey')};
`
