import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// #0ed1e8; // #F2B84B; // 242, 184, 75
// $SECONDARY_COLOR: #065f69;

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#F2AF5C', // '#0ed1e8', // '#F2B84B',
    },
    secondary: {
      main: '#F28177', // '#266269', // '#FB6542',
    },

    common: {
        black: '#1E1E1E',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 12
  },
})


export default theme