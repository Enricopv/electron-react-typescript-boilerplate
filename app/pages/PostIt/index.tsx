import * as React from "react"
import PostIt from "./PostIt";
import { ApolloClient } from "apollo-client";
import { Typography } from "@material-ui/core";
import { withApollo } from "../../../node_modules/react-apollo";
import { getUserPostIts } from "../../types/schema";
import { GET_POSTITS } from "./graphql";

// const data = [
//   {
//     id: 1,
//     marked: false,
//     text: "[SAF] Forgot Password Page"
//   },
//   {
//     id: 2,
//     marked: false,
//     text: "[SAF] Sign Up Page"
//   },
//   {
//     id: 3,
//     marked: false,
//     text: "[SAF] Reward Details"
//   },
//   {
//     id: 4,
//     marked: false,
//     text: "[SAF] Notifications"
//   },
//   {
//     id: 5,
//     marked: false,
//     text: "[SAF] General Notifications Detail"
//   }
// ]

// export interface data {
//   id: number
//   marked: boolean
//   text: string
// }

interface Props {
  client: ApolloClient<any>
}

interface State {
  loading: boolean,
  data: getUserPostIts | any[]
}


class Index extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      loading: true,
      data: []
    }
    this.loadData()
  }

  public loadData = async () => {
    const result = await this.props.client.query<getUserPostIts>({
      query: GET_POSTITS
    })

    // result.data
    this.setState({
      data: result.data,
      loading: result.loading
    })
  }

  public render() {
    if(this.state.loading) {
      return <Typography variant="title">Loading...</Typography>
    }
    return(
      <PostIt data={this.state.data}/>
    )
  }
}
export default withApollo(Index)