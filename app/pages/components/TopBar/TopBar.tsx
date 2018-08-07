import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AddIcon from "@material-ui/icons/Add"
import MenuIcon from "@material-ui/icons/Menu"
import * as React from "react"

const styles = (theme: ThemeOptions) =>
  createStyles({
    root: theme.appBar
  })
interface Props extends WithStyles<typeof styles> {
  history?: History
  title: string
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
    // const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
        <AppBar position="static" className={this.props.classes.root}>
          <Toolbar style={{padding: 0}}>
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
              variant="title"
              color="inherit"
              noWrap={true}
              style={{ flex: 1}}
            >
              {this.props.title}
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
