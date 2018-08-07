import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/CancelOutlined"
import CheckBoxIcon from "@material-ui/icons/Checkbox"
import CheckBoxIconOutline from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import * as React from "react"

interface Props {
  onChangeHandler: (event: React.MouseEvent) => void
  toggleEdit: () => void
  handleKeyPress: (event: React.KeyboardEvent) => void
  marked: boolean
  text: string
  edit: boolean
}

export default class PostItItem extends React.PureComponent<Props> {




  public render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          paddingLeft: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 45,
          boxShadow: "0px 0px 10px rgba(0,0,0,.3)",
          marginBottom: 8
        }}
      >
        <Grid
          item
          xs={1}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={this.props.onChangeHandler}
        >
          {this.props.marked ? (
            <CheckBoxIcon style={{ color: "#9E9E9E" }} />
          ) : (
            <CheckBoxIconOutline style={{ color: "#9E9E9E" }} />
          )}
        </Grid>
        <Grid item xs={10} style={{ paddingLeft: 5, cursor: "pointer" }}>
          {this.props.edit ? (
            <TextField defaultValue={this.props.text} onKeyDown={this.props.handleKeyPress} autoFocus/>
          ) : (
            <Typography
              variant="subheading"
              onClick={this.props.toggleEdit}
              style={{
                textDecoration: this.props.marked ? "line-through" : "none"
              }}
            >
              {this.props.text}
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", alignItems: "center", paddingRight: 5 }}
        >
          <DeleteIcon style={{ color: "#9E9E9E" }} />
        </Grid>
      </Grid>
    )
  }
}
