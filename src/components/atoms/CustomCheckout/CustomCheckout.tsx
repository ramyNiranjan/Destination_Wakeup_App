import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import * as S from './styled'

type OwnProps = {}

type Props = OwnProps

export const CustomCheckout: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <Text>CustomCheckout</Text>
    </S.Container>
  )
}

export default CustomCheckout
