import React, { FunctionComponent, useState, useCallback } from 'react'
import { Text } from 'react-native'
import * as S from './styled'

type OwnProps = {
  active: boolean
  onToggle: (on: boolean) => void
}

type Props = OwnProps

export const Toggle: FunctionComponent<Props> = ({ active, onToggle }) => {
  const toggleActive = () => onToggle(!active)

  return (
    <S.Container onPress={toggleActive}>
      <S.Square active={active} />
    </S.Container>
  )
}

export default Toggle
