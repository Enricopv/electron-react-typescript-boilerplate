import { Typography } from "@material-ui/core"
import { ApolloClient } from "apollo-client"
import * as React from "react"
import { withApollo } from "react-apollo"
import { AUTH_TOKEN } from "../../setup/constants"
import {
  getUserPostIts,
  getUserPostIts_getUserPostIts_notes,
  login
} from "../../types/schema"
import { QUERY_GET_POSTITS, QUERY_LOGIN } from "./graphql"
import MainViewPort from "./MainViewPort"

interface Props {
  client: ApolloClient<any>
}

interface State {
  loading: boolean
  data: getUserPostIts_getUserPostIts_notes[] | null
}

class Index extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: true,
      data: []
    }
    this.login()
  }

  public login = async () => {
    const result = await this.props.client.query<login>({
      query: QUERY_LOGIN,
      variables: {
        email: "enricovalbuena@gmail.com",
        password: "123"
      }
    })

    // console.log(result)
    if (result.errors) {
      alert(result.errors[0].message)
    }
    const { token } = result.data.login
    await this.props.client.resetStore()
    await this.saveUserData(token)
    this.loadData()
  }

  public saveUserData = (token: string): void => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  public loadData = async () => {
    const result = await this.props.client.query<getUserPostIts>({
      query: QUERY_GET_POSTITS
    })
    // result.data
    this.setState({
      data: result.data.getUserPostIts[0].notes,
      loading: result.loading
    })
  }

  public render() {
    if (this.state.loading) {
      return <Typography variant="title">Loading...</Typography>
    }
    return <MainViewPort data={this.state.data} />
  }
}
export default withApollo(Index)
