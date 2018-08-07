import * as React from "react"
import PostItItem from "./PostItItem"

interface State {
  marked: boolean
  edit: boolean
}

interface Props {
  marked: boolean
  text: string
}

export default class Index extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      marked: this.props.marked,
      edit: false
    }
    this.onChangeHandler.bind(this)
    this.toggleEdit.bind(this)
    this.handleKeyPress.bind(this)
  }

  public toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  public onChangeHandler = () => {
    this.setState({
      marked: !this.state.marked
    })
  }

  public handleKeyPress = (event: React.KeyboardEvent) => {
    console.log(event.key)
    if (event.key === "Enter") {
      this.setState({
        edit: !this.state.edit
      })
    }
  }

  public render() {
    return (
      <PostItItem
        marked={this.state.marked}
        text={this.props.text}
        edit={this.state.edit}
        toggleEdit={this.toggleEdit}
        handleKeyPress={this.handleKeyPress}
        onChangeHandler={this.onChangeHandler}
      />
    )
  }
}
