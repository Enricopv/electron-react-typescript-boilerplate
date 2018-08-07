import * as React from "react"
import PostItItem from "./components/PostItItem"
import { IPostItItem } from "../../types/types"

interface Props {
  notes: IPostItItem[]
}

export default class SinglePostIt extends React.PureComponent<Props> {
  public render() {
    return (
      <div >
        {this.props.notes.map((item: IPostItItem) => (
          <PostItItem key={item.id} text={item.text} marked={item.marked}/>
        ))}
      </div>
    )
  }
}
