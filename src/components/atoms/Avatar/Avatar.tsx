import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import * as S from './styled'

type OwnProps = {}

type Props = OwnProps

export const Avatar: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <Text>Avatar</Text>
    </S.Container>
  )
}

export default Avatar
