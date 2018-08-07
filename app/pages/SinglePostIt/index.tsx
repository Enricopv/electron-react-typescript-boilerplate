import * as React from "react"
import SinglePostIt from "./SinglePostIt"
import MainViewPort from "../components/MainViewPort/MainViewPort"

const postIt = {
  id: "cjkiv12wq714q0b43fgo05m9s",
  user: {
    id: "cjkit2djx6dme0b438kh24r07"
  },
  title: "Today Todo",
  notes: [
    {
      id: "cjkiv1ywn71c70b43ikrby5ng",
      marked: false,
      text: "SAF Forgot Password Page"
    },
    {
      id: "cjkiv286471e20b43ttma2fmi",
      marked: false,
      text: "SAF Sign Up Page"
    },
    {
      id: "cjkiv2ets71fs0b431nu4wvrg",
      marked: false,
      text: "SAF Rewards Detail Page"
    },
    {
      id: "cjkiv2nww71hr0b43jmbxywdd",
      marked: false,
      text: "SAF Notifications page"
    },
    {
      id: "cjkiv2uxn71ju0b43ulosq8d4",
      marked: false,
      text: "SAF General Notifications Pop Up"
    },
    {
      id: "cjkiz4y0l850j0b439dtaoee3",
      marked: false,
      text: "SAF General Notifications Test"
    },
    {
      id: "cjkiz65ot85aj0b43iwiszdyw",
      marked: false,
      text: "SAF Intructions"
    }
  ]
}

interface PostItItem {
  id: string
  marked: boolean
  text: string
}

interface Props {
  id: string
  user: {
    id: string
  },
  title: string
  notes: PostItItem[]
}

interface State {
  data: PostItItem[]
}

class Index extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: postIt.notes
    }
  }
  public render() {
    return (
      <MainViewPort title={postIt.title}>
        <SinglePostIt />
      </MainViewPort>
    )
  }
}

export default Index
