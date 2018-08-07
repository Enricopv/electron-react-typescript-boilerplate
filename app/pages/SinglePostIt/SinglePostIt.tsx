import * as React from "react"
import PostItItem from "./components/PostItItem"
import { IPostItItem } from "../../types/types"
import AddPostItItem from "./components/AddPostItItem/AddPostItItem"

interface Props {
  notes: IPostItItem[]
  updateNote: ({  }: IPostItItem) => void
  deleteNote: (id: string) => void
  createPostItItem: () => void
}

export default class SinglePostIt extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        {this.props.notes.map((item: IPostItItem) => (
          <PostItItem
            key={item.id}
            id={item.id}
            text={item.text}
            marked={item.marked}
            autoFocus={item.autoFocus || false}
            updateNote={this.props.updateNote}
            deleteNote={this.props.deleteNote}
          />
        ))}
        <AddPostItItem createPostItItem={this.props.createPostItItem} />
      </div>
    )
  }
}
