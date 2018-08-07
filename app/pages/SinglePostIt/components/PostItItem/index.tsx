import * as React from "react"
import PostItItem from "./PostItItem"

interface State {
  marked: boolean
}

interface Props {
  marked: boolean
  text: string
}

export default class Index extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      marked: this.props.marked
    }
    this.onChangeHandler.bind(this)
  }

  public onChangeHandler = () => {
    this.setState({
      marked: !this.state.marked
    })
  }

  public render() {
    return <PostItItem marked={this.state.marked} text={this.props.text} onChangeHandler={this.onChangeHandler} />
  }
}
