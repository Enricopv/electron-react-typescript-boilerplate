import * as React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
// import App from "./containers/App"
// import HomePage from './containers/HomePage';
// import CounterPage from "./containers/CounterPage"
import { SinglePostIt } from "./pages"

export default () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/counter" component={CounterPage} /> */}
      <Route path="/" component={SinglePostIt} />
    </Switch>
  </BrowserRouter>
)
