import * as React from "react"
import PostItItem from "./components/PostItItem"

export default class SinglePostIt extends React.PureComponent {
  public render() {
    return (
      <div>
        <PostItItem text="Design the Login Page" marked={false} />
        <PostItItem text="Design the Login Page" marked={false} />
        <PostItItem text="Design the Login Page" marked={false} />
        <PostItItem text="Design the Login Page" marked={false} />
      </div>
    )
  }
}
