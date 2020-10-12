import React, { FunctionComponent } from 'react'
import { CenteredFillView, Text, CircleView } from 'styled-native-kit'

import i18n, { tk } from '../../i18n'

type OwnProps = {}

type Props = OwnProps


export const  WelcomeScreen : FunctionComponent<Props>= () =>  {
   return (
      <CenteredFillView>
        <CircleView size={240} color="purple">
          <Text centered uppercase fontSize={26} color="white">
            {i18n.t(tk.welcome)}
          </Text>
        </CircleView>
      </CenteredFillView>
    )
 
}


