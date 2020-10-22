import React, { FunctionComponent } from 'react'
import { TextInput,TextInputProps} from 'react-native';
import * as S from './styled'

type OwnProps = {
  type?:'outline' | 'text' | 'default'
}&TextInputProps

type Props = OwnProps

export const CustomInput: FunctionComponent<Props> = ({
   type = 'default',
...textInputProps
}) => {
  return (
    <S.Container type={type}>
      <TextInput  {...textInputProps}/>
    </S.Container>
  )
}

export default CustomInput
