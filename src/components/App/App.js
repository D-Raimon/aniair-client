import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
// import Footer from '../shared/Footer'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Shows from '../Shows/Shows'
import Show from '../Shows/Show'
import CreateShow from '../Shows/CreateShow'
import EditShow from '../Shows/EditShow'
import Watchlist from '../Watchlist/Watchlist'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Switch>
            <Route exact path="/shows" render={() => (
              <Shows alert={this.alert} user={user} />
            )} />
            <Route exact path="/shows/:id" render={(props) => (
              <Show {...props} alert={this.alert} user={user} />
            )} />
            <Route path="/shows/:id/edit" render={(props) => (
              <EditShow {...props} alert={this.alert} user={user} />
            )} />
          </Switch>
          <Route path="/create-show" render={(props) => (
            <CreateShow {...props} alert={this.alert} user={user} />
          )} />
          <Route path="/watchlist" render={(props) => (
            <Watchlist {...props} alert={this.alert} user={user} />
          )} />
        </main>
        { /* <Footer /> */ }
      </Fragment>
    )
  }
}

export default App
