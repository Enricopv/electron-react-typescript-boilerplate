import * as React from "react"
import { IPostItItem } from "../../types/types"
import MainViewPort from "../components/MainViewPort/MainViewPort"
import SinglePostIt from "./SinglePostIt"

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
    }
    // {
    //   id: "cjkiv2ets71fs0b431nu4wvrg",
    //   marked: false,
    //   text: "SAF Rewards Detail Page"
    // },
    // {
    //   id: "cjkiv2nww71hr0b43jmbxywdd",
    //   marked: false,
    //   text: "SAF Notifications page"
    // },
    // {
    //   id: "cjkiv2uxn71ju0b43ulosq8d4",
    //   marked: false,
    //   text: "SAF General Notifications Pop Up"
    // },
    // {
    //   id: "cjkiz4y0l850j0b439dtaoee3",
    //   marked: false,
    //   text: "SAF General Notifications Test"
    // },
    // {
    //   id: "cjkiz65ot85aj0b43iwiszdyw",
    //   marked: false,
    //   text: "SAF Intructions"
    // }
  ]
}

interface Props {
  id: string
  user: {
    id: string
  }
  title: string
  notes: IPostItItem[]
}

interface State {
  notes: IPostItItem[]
}

class Index extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      notes: postIt.notes
    }
    this.updateNote.bind(this)
    this.deleteNote.bind(this)
    this.createPostItItem.bind(this)
  }

  public updateNote = ({ id, text, marked }: IPostItItem) => {
    let notesCopy: IPostItItem[] = Object.assign([], this.state.notes)
    const index = this.state.notes.findIndex(note => note.id === id)
    notesCopy.splice(index, 1, { id, text, marked })
    this.setState({
      notes: notesCopy
    })
    // TODO Some Apollo
  }

  public deleteNote = (id: string) => {
    let notesCopy: IPostItItem[] = Object.assign([], this.state.notes)
    const index = this.state.notes.findIndex(note => note.id === id)
    notesCopy.splice(index, 1)
    this.setState({
      notes: notesCopy
    })
    // TODO Apollo to delete
  }

  public completeNote = () => {}

  public createPostItItem = () => {
    // TODO Apollo to create blank note and get ID
    const randomNumber = Math.floor(Math.random()*90000) + 10000;

    let notesCopy: IPostItItem[] = Object.assign([], this.state.notes)
    notesCopy.push({id: randomNumber.toString(), text: "New Item", marked: false, autoFocus: true})
    this.setState({
      notes: notesCopy
    })
  }

  public render() {
    return (
      <MainViewPort title={postIt.title}>
        <SinglePostIt
          notes={this.state.notes}
          updateNote={this.updateNote}
          deleteNote={this.deleteNote}
          createPostItItem={this.createPostItItem}
        />
      </MainViewPort>
    )
  }
}

export default Index
