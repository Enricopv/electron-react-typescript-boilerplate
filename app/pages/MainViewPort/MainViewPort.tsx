import * as React from "react"
import {
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import { getUserPostIts } from "../../types/schema"
import TopBar from "../components/TopBar/TopBar"
import { PostItItem } from "./components"

const styles = (theme: ThemeOptions) =>
  createStyles({
    root: theme.paper
  })
interface Props extends WithStyles<typeof styles> {
  data: getUserPostIts | any
}

class PostIt extends React.Component<Props> {
  constructor(props: any) {
    super(props)
    // this.state = {
    //   postItItems: this.loadPostIts()
    // }
  }

  public componentDidMount() {
    console.log("data", this.props.data)
    // this.loadPostIts
  }

  // public loadPostIts = () => {
  //   console.log("data", this.props.data)
  //   if (this.props.data) {
  //     // const test = this.props.data.getUserPostIts[0]
  //     const postItItems = this.props.data.map((item: any) => (
  //       <PostItItem key={item.id} text={item.text} marked={item.marked} />
  //     ))
  //     this.setState({
  //       postItItems
  //     })
  //   }
  // }

  public render() {
    return (
      <div>
        <TopBar />
        <div className={this.props.classes.root}>
          {this.props.data.map((item: any) => (
            <PostItItem key={item.id} text={item.text} marked={item.marked} />
          ))}
        </div>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(PostIt)
