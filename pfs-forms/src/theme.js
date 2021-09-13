import { createTheme } from '@material-ui/core/styles'

// const bluegray ='#2c394b'
// const maroon = '#845460'

// const black = '#000000'
// const red = '#bd4b4b'
//* const salmon = '#efb7b7'


const theme = createTheme({
  palette: {
    primary: {
      main: '#8454600'
    },
    secondary: {
      main: '#2c394b'
    }
  },
  typography: {
    fontFamily: [
      '"Roboto Slab", serif',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

export default theme
