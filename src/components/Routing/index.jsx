import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Fieldset from '../Fieldset'

export default class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <div>The road to the nothingness starts here!</div>
        <Route path='/routing/default' render={props => (
          <Fieldset {...props}>
            <p>Yo, man! We have smt intereting here by <b>default</b>!</p>
          </Fieldset>
        )} />
        <Route path='/routing/:username' render={() => (
          <p>And here we have some fictional username. Ostensibly...</p>
        )} />
      </React.Fragment>
    )
  }
}
