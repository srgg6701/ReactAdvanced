import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './sass/index.scss';

import Navigation from '../components/Navigation/';
import Children from '../components/Children/';
import Context from '../components/Context/';
import Durty from '../components/Durty/';
import Lazy from '../components/Lazy/';
import { Inner } from '../components/Durty/';
import Puritan from '../components/Puritan/';
import Refs from '../components/Refs/';
import Routing from '../components/Routing/';

const LINKS = [
  { label: 'Home', to: '/', exact: true },
  { label: 'Children', to: '/children' },
  { label: 'Context', to: '/context' },
  { label: 'Durty', to: '/durty' },
  { label: 'Lazy', to: '/lazy' },
  { label: 'Puritan', to: '/puritan',
      submenu: [
        { label: 'Inner', to: '/inner' }
      ] 
  },
  { label: 'Refs', to: '/refs' },
  { label: 'Routing', to: '/routing' },
  { label: '↑ GitHub', to: 'https://github.com/srgg6701/ReactAdvanced' },
];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Navigation links={LINKS} />
        </nav>
        <main>
          <Route path="/children" component={Children} />
          <Route path="/context" component={Context} />
          <Route path="/durty" component={Durty} />
          <Route path="/lazy" component={Lazy} />
          <Route path="/puritan" exact component={Puritan} />
          <Route path="/puritan/inner" component={Inner} />
          <Route path="/refs" component={Refs} />
          <Route path="/routing" component={Routing} />
          <Route path="/" exact render={() => (
            <React.Fragment>
              <h1>Yo, man!</h1>
              <p>Homepage is here</p>
            </React.Fragment>)
          } />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
