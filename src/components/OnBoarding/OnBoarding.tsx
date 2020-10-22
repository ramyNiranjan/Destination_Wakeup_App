import React, { FunctionComponent } from 'react'



import { Space } from '../../theme/components/base'
import OnBoardingSvg from '../../assets/svg/DestiOnBoarding.svg'

import * as S from './styled'
import  Button  from '../atoms/Button'
import { Headline1, Headline2,InfoText } from '../../theme/components/typography'

type OwnProps = {
  finishOnBoarding: Function
}

type Props = OwnProps

const OnBoarding: FunctionComponent<Props> = ({ finishOnBoarding }) => {
  return (

      
    <S.Container>
       <Space h36/>
      <Headline1 primary bold>Journey Timer</Headline1>
      <S.OnBoardingContent>
        <Headline2 bold accent>
          Welcome
        </Headline2>
        <Space h16 w16/>
        <InfoText accent>
          From now on you'll never have to worry
           about missing your bus or train stop again!
        
        </InfoText>
        <Space h12 />
        <InfoText accent>
            We'll always make sure you'll wake up on time.
        </InfoText>
        <S.SvgWrapper>
        <OnBoardingSvg />
        </S.SvgWrapper>
      </S.OnBoardingContent>
      <S.ContinueBtn>
        
      <Button title="Start" onPress={finishOnBoarding}/>
      {/* <S.SignInText>
        Already have an account? Sign In </S.SignInText> */}
      </S.ContinueBtn>
    </S.Container>
  )
}

export default OnBoarding
