import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import AddButton from "@material-ui/icons/Add"
import * as React from "react"

interface Props {
  createPostItItem: () => void
}

export default class AddPostItItem extends React.PureComponent<Props> {
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
          marginBottom: 8,
          cursor: "pointer"
        }}
        onClick={this.props.createPostItItem}
      >
        <Grid item xs={1} style={{ display: "flex", alignItems: "center" }}>
          <AddButton style={{ color: "#BDBDBD" }} />
        </Grid>
        <Grid item xs={11} style={{ paddingLeft: 5 }}>
          <Typography variant="subheading" style={{color: "#BDBDBD"}}>New Item</Typography>
        </Grid>
      </Grid>
    )
  }
}
