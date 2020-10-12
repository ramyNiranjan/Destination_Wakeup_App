import 'react-native-gesture-handler'
import { LogBox  } from 'react-native' 
import App from './src'

LogBox.ignoreLogs(['Expected style', 'Remote debugger is in a background tab'])

export default App
