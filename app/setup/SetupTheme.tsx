import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme"
import { MuiThemeProvider } from "@material-ui/core/styles"
import * as React from "react"
import Routes from "../routes"
// import { greyColor } from '../theme/colors'
// import { orange } from '@material-ui/core/colors'
import yellow from "@material-ui/core/colors/yellow"
import grey from "@material-ui/core/colors/grey"

// ? Declare new theme variables
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appBar: {
      flexGrow: number
      backgroundColor: string
    }
    paper: {
      height: string
      color: string
      padding: number
      backgroundColor: string
    }
  }

  interface ThemeOptions {
    appBar: {
      flexGrow: number
      backgroundColor: string
    }
    paper: {
      height: string
      color: string
      padding: number
      backgroundColor: string
    }
  }
}

// ?? Add new theme variables
const theme = createMyTheme({
  appBar: {
    flexGrow: 1,
    backgroundColor: yellow[600]
  },
  paper: {
    height: "100vh",
    color: "black",
    padding: 5,
    backgroundColor: yellow[200]
  }
})

// Edit Original MUI Settings
function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&:before": {
            borderBottomColor: grey[400]
          },
          "&:hover:not($disabled):not($error):not($focused):before": {
            borderBottomColor: grey[800]
          },
          "&:after": {
            borderBottomColor: grey[600]
          }
        }
      }
    },
    typography: {
      fontFamily: "Poppins"
    },
    palette: {
      background: {
        default: "#ECF5F8"
      }
    },
    ...options
  })
}

const SetupTheme = (props: any) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes {...props} />
    </MuiThemeProvider>
  )
}

export default SetupTheme
