import React, { FunctionComponent } from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styled'
import { Touchable } from '../../../theme/components/base'

type OwnProps = {
  type?: 'outline' | 'text' | 'default'
  variant?: 'accent_1' | 'accent_2' | 'background' | 'primary'
  title: string
} & TouchableOpacityProps

type Props = OwnProps

export const Button: FunctionComponent<Props> = ({
  title,
  variant = 'primary',
  type = 'default',
  disabled,
  ...touchableProps
}) => (
  <Touchable disabled={disabled} {...touchableProps}>
    <S.Container type={type} disabled={disabled} variant={variant}>
      <S.Title type={type} disabled={disabled} variant={variant}>
        {title}
      </S.Title>
    </S.Container>
  </Touchable>
)

export default Button
