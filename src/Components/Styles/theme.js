import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette : {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#F7F8F7',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: '#D58180',
            // dark: will be calculated from palette.secondary.main,
          },
          error : {
              main : "#F5B431"
          },
          warning : {
            main : "#A83A24"
          },
          info : {
            main: "#3B3542"
          }
    }
})