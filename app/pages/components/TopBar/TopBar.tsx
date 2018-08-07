import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Theme, withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import AddIcon from "@material-ui/icons/Add"
import * as React from "react"

const styles = {
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginLeft: -12,
  // }
}

interface ClassProps {
  root: string
  appBar: string
  appBarShift: string
  menuButton: string
  hide: string
  drawerPaper: string
  drawerPaperClose: string
  toolbar: string
  content: string
}

interface Props {
  history?: History
  classes: ClassProps
  theme?: Theme
}

class MenuAppBar extends React.Component<Props> {
  state = {
    auth: true,
    anchorEl: null
  }

  public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorEl: undefined })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton
                // className={classes.menuButton}
                color="inherit"
                onClick={this.handleMenu}
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
            <Typography
              variant="body1"
              color="inherit"
              noWrap={true}
              style={{ flex: 1, textAlign: "center" }}
            >
              To-Do
            </Typography>

            <IconButton
              // className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MenuAppBar)
