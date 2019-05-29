import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default Routes
