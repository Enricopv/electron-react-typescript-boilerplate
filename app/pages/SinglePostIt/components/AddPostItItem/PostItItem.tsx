import * as React from "react"
import CheckBoxIcon from "@material-ui/icons/Checkbox"
import CheckBoxIconOutline from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import DeleteIcon from "@material-ui/icons/CancelOutlined"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

interface Props {
  onChangeHandler: (event: React.MouseEvent) => void
  marked: boolean
  text: string
}

export default class SinglePostIt extends React.PureComponent<Props> {
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
        onClick={this.props.onChangeHandler}
      >
        <Grid item xs={1} style={{ display: "flex", alignItems: "center" }}>
          {this.props.marked ? (
            <CheckBoxIcon style={{ color: "#9E9E9E" }} />
          ) : (
            <CheckBoxIconOutline style={{ color: "#9E9E9E" }} />
          )}
        </Grid>
        <Grid item xs={10} style={{ paddingLeft: 5 }}>
          <Typography
            variant="subheading"
            style={{
              textDecoration: this.props.marked ? "line-through" : "none"
            }}
          >
            Design the Login Page
          </Typography>
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
