import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './sass/index.scss';
import './sass/forms.scss';

import LINKS from './links';
import Navigation from '../components/Navigation/';
import Children from '../components/Children/';
import Context from '../components/Context/';
// FieldsetHOCPure
import { FieldsetHOCPure } from '../components/HOCs/';
import Textual from '../components/Context/Textual';
import Lifecycle from '../components/Lifecycle/';
import Lazy from '../components/Lazy/';
import { Inner } from '../components/Lifecycle/';
import Puritan from '../components/Puritan/';
import Refs from '../components/Refs/';
import Routing from '../components/Routing/';

const HOC = FieldsetHOCPure(Textual, {name: "Strange fruit"}, <p>Yo! Children here.</p>);

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
          <Route path="/lazy" component={Lazy} />
          <Route path="/HOCs" component={HOC} />
          <Route path="/lifecycle" component={Lifecycle} />
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
