import * as React from "react"
import PostItItem from "./PostItItem"
import { IPostItItem } from "../../../../types/types";

interface State {
  marked: boolean
  edit: boolean
}

interface Props {
  id: string
  marked: boolean
  text: string
  autoFocus: boolean
  updateNote: ({}: IPostItItem) => void
  deleteNote?: (id: string) => void
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
    this.onTextChangeHandler.bind(this)
  }

  public componentDidMount() {

    if(this.props.autoFocus) {
      this.toggleEdit()
    }
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

  public deleteNote = () => {
    if(this.props.deleteNote) {
      this.props.deleteNote(this.props.id)
    }
  }

  public onTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    this.props.updateNote({id, text: value, marked: this.state.marked})
  }

  public handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      this.setState({
        edit: !this.state.edit
      })
    }
  }

  public render() {
    return (
      <PostItItem
        id={this.props.id}
        marked={this.state.marked}
        text={this.props.text}
        edit={this.state.edit}
        toggleEdit={this.toggleEdit}
        handleKeyPress={this.handleKeyPress}
        onChangeHandler={this.onChangeHandler}
        onTextChangeHandler={this.onTextChangeHandler}
        deleteNote={this.deleteNote}
        autoFocus={this.props.autoFocus}
      />
    )
  }
}
