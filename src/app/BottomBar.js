import * as React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Fab from "@mui/material/Fab"
import HomeIcon from "@mui/icons-material/Home"
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import BarChartIcon from "@mui/icons-material/BarChart"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Grid, withStyles } from "@mui/material"

// const styles = {
//   customizeToolbar: {
//     height: 80
//   }
// }
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 0.5,
  bottom: 8,
  left: 0,
  right: 0,
  margin: "0 auto",
  backgroundColor: "#6D9BDD"
})

function BottomAppBar({ classes }) {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent={"space-around"}>
          <Grid item>
            <IconButton color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" aria-label="link">
              <AllInclusiveIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <StyledFab color="secondary" aria-label="add">
              <AccountBalanceWalletIcon />
            </StyledFab>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <BarChartIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

// export default withStyles(styles)(BottomAppBar)
export default BottomAppBar
