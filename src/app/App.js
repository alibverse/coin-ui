import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

import BottomAppBar from "./BottomBar"
import { Grid } from "@mui/material"

const App = () => (
  <Grid>
    <ThemeProvider theme={theme}>
      <BottomAppBar />
    </ThemeProvider>
  </Grid>
)
export default App
