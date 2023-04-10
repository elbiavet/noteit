import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary:{
            main: '#7817FD'
        },
        secondary:{
            main: '#3414E3'
        },
        error:{
            main: red.A400
        }
    }
})

