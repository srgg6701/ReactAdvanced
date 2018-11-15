import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Fieldset from '../Fieldset'

const base = '/routing';

export default class Routing extends Component {
  links = {
    default: `${base}/default`,
    username: `${base}/username`,
    usernamePattern: `${base}/:username`
  }
  render() {
    const exact = true;
    return (
      <React.Fragment>
        <ul>
          <li><NavLink exact={exact} to={base}>Top</NavLink></li>
          <li><NavLink exact={exact} to={this.links.default}>Default</NavLink></li>
          <li><NavLink exact={exact} to={this.links.username}>Username</NavLink></li>
        </ul>
        <Switch>
          <Route path={this.links.default} render={props => (
            <Fieldset legend="Nested routing: default" {...props}>
              <p>Yo, man! We have smt intereting here by <b>default</b>!</p>
            </Fieldset>
          )} />
          <Route path={this.links.usernamePattern} render={() => (
            <p>And here we have some fictional username. Ostensibly...</p>
          )} />
          <Route path={this.links.base} exact render={() => (
            <React.Fragment>
              <div>The road to the nothingness starts here!</div>
            </React.Fragment>
          )} />
        </Switch>
      </React.Fragment>
    )
  }
}
