import * as React from "react"
import Typography from "@material-ui/core/Typography"
import { PostItItem } from "./components"
import { data } from "."
import MenuIcon from "@material-ui/icons/Menu"

interface Props {
  data: data[]
}

interface State {
  postItItems: JSX.Element[]
}

export default class PostIt extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      postItItems: this.loadPostIts()
    }
  }

  loadPostIts = () => {
    return this.props.data.map((item: any) => (
      <PostItItem key={item.id} text={item.text} marked={item.marked} />
    ))
  }

  public render() {
    return (
      <div
        style={{
          backgroundColor: "#FFF176",
          height: "100vh",
          color: "black",
          padding: 5
        }}
      >
        <div>
        <MenuIcon/> <Typography variant="title">To-Do (ASANA)</Typography></div>
        {this.state.postItItems}
      </div>
    )
  }
}
