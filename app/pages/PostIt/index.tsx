import * as React from "react"
import PostIt from "./PostIt";

const data = [
  {
    id: 1,
    marked: false,
    text: "[SAF] Forgot Password Page"
  },
  {
    id: 2,
    marked: false,
    text: "[SAF] Sign Up Page"
  },
  {
    id: 3,
    marked: false,
    text: "[SAF] Reward Details"
  },
  {
    id: 4,
    marked: false,
    text: "[SAF] Notifications"
  },
  {
    id: 5,
    marked: false,
    text: "[SAF] General Notifications Detail"
  }
]

export interface data {
  id: number
  marked: boolean
  text: string
}

export default class Index extends React.Component {
  public render() {
    return(
      <PostIt data={data}/>
    )
  }
}