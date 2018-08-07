import * as React from "react"
import { data } from "."
import TopBar from "../components/TopBar/TopBar"
import { PostItItem } from "./components"

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
      <div>
        <TopBar />
        <div
          style={{
            backgroundColor: "#FFF176",
            height: "100vh",
            color: "black",
            padding: 5
          }}
        >
          {this.state.postItItems}
        </div>
      </div>
    )
  }
}
