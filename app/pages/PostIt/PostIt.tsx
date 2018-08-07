import * as React from "react"
import TopBar from "../components/TopBar/TopBar"
import { PostItItem } from "./components"
import { getUserPostIts } from "../../types/schema"

interface Props {
  data: getUserPostIts | any
}


export default class PostIt extends React.Component<Props> {
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
          <div
            style={{
              backgroundColor: "#FFF176",
              height: "100vh",
              color: "black",
              padding: 5
            }}
          >
            {this.props.data.map((item: any) => (
              <PostItItem key={item.id} text={item.text} marked={item.marked} />
            ))}
          </div>
        </div>
      )
  }
}
