import * as React from "react"
import {
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import TopBar from "../TopBar/TopBar"

const styles = (theme: ThemeOptions) =>
  createStyles({
    root: theme.paper
  })

interface Props extends WithStyles<typeof styles> {
  title: string
}

class MainViewPort extends React.PureComponent<Props> {

  public render() {
    return (
      <div>
        <TopBar title={this.props.title} />
        <div className={this.props.classes.root}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(MainViewPort)
