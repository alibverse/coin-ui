import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
    h1: {
      fontSize: "5rem",
      fontFamily: "Raleway"
    },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "Open Sans",
      fontStyle: "bold"
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "Roboto"
    }
  },
  palette: {
    background: {
      default: "#232D5C"
    },
    primary: {
      main: "#3A498B"
    },
    secondary: {
      main: "#E769A6" //pink
    },
    error: {
      main: "#D72A2A" //red
    },
    warning: {
      main: "#FC7B09" //orange
    },
    info: {
      main: "#6B7D6A" //gray
    },
    success: {
      main: "#09FE00" //green
    },
    text: {
      primary: "#000000", //black
      secondary: "#FFFFFF" //white
    }
  }
})

export default theme
