import styled from 'styled-components/native'
import layout from '../../theme/layout'

export const ContinueBtn = styled.View`
 width:60%;
`

export const Container = styled.View`
  display:flex;
  height:100%;
  width:100%;
  justify-content: flex-start; 
  align-items: center; 
`

export const SignInText = styled.Text`
  text-align: center;
  font-size: 12px;
`

export const OnBoardingContent = styled.View`
  display:flex;
  height:65%;
  width:80%;
  justify-content: center;
  align-items: center; 
 
`
export const OnBoardingTitle = styled.Text`
  font-size:30px;
  font-weight:bold;
  text-align:left;
`
export const OnBoardingDesc = styled.Text`
  font-size:20px;
`
export const OnBoardingDescSub = styled.Text`
  font-size:20px;
`
export const SvgWrapper = styled.View`
display:flex;
justify-content:center;
align-items: center;
width: ${layout.width};
height: ${layout.height*0.3};
padding-top:30px;
`
