import React, { FunctionComponent } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import OnBoarding from '../../components/OnBoarding'
import * as S from './styled'

type OwnProps = {
  setOnBoardinCompleted: React.Dispatch<React.SetStateAction<Boolean>>
}

type Props = OwnProps

export const OnBoardingScreen: FunctionComponent<Props> = ({
  setOnBoardinCompleted,
}) => {

  
  const finishOnBoarding = async () => {
    try {
      await AsyncStorage.setItem('onBoarding', 'done')
      setOnBoardinCompleted(true)
    } catch (e) {
      console.log('async storage error ddd')
    }
  }

  return (
    <S.Container>
      <OnBoarding finishOnBoarding={finishOnBoarding} />
    </S.Container>
  )
}

export default OnBoardingScreen
