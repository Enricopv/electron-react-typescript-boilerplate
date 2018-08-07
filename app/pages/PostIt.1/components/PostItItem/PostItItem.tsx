import * as React from "react"
import CheckboxBlank from "@material-ui/icons/CheckBoxOutlineBlank"
import Checkbox from "@material-ui/icons/Checkbox"

interface Props {
  onChangeHandler: (event: React.MouseEvent) => void
  marked: boolean,
  text: string
}

export default class PostItItem extends React.PureComponent<Props> {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: this.props.marked ? "line-through" : "none"
        }}
        onClick={this.props.onChangeHandler}
      >
        {this.props.marked ? <Checkbox /> : <CheckboxBlank />} {this.props.text}
      </div>
    )
  }
}
