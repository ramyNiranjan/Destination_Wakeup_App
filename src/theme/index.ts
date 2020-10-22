import colors from './colors.json'
import fonts from './fonts'
import * as stylingVariables from './variables'

const theme = {
  ...stylingVariables,
  ...colors,
  fonts
}

export default theme
