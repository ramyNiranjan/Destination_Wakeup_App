import React, { FunctionComponent, useEffect, useState } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-community/async-storage';



import WelcomeScreen from './screens/WelcomeScreen'
import { navigationRef } from './util/navigationService'
import OnBoardingScreen from './screens/OnBoardingScreen';


type OwnProps = {}
type Props = OwnProps

const Tab = createBottomTabNavigator()


const App: FunctionComponent<Props> = () => {
  const [onBoardinCompleted, setOnBoardinCompleted] = useState<Boolean>(false)

   const isFirstTime = async () => {
    try {
      const value = await AsyncStorage.getItem('onBoarding')
      return value ? setOnBoardinCompleted(true) : setOnBoardinCompleted(false)
    } catch (e) {
      console.log('async storage error fff')
    }
  }

//   const removeValue = async () => {
//   try {
//     await AsyncStorage.removeItem('onBoarding')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Done.')
// }

  useEffect(() => {
    // removeValue()// onboarding test
    isFirstTime()
  })

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <NavigationContainer ref={navigationRef}>
        {!onBoardinCompleted ? (
          <OnBoardingScreen setOnBoardinCompleted={setOnBoardinCompleted} />
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={WelcomeScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
      
    </View>
  )
}

export default App
