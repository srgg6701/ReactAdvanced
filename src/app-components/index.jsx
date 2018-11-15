import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/index.scss';
import './sass/forms.scss';
import LINKS from './links';
import Navigation from '../components/Navigation/';
import Children from '../components/Children/';
import Context from '../components/Context/';
// index -> default -> FieldsetHOCPureCalled -> FieldsetHOCPure
import { FieldsetHOCPureCalled } from '../components/HOCs/';
//import Textual from '../components/Context/Textual';
import Lifecycle, { Inner } from '../components/Lifecycle/';
import Lazy from '../components/Lazy/';
import Puritan from '../components/Puritan/';
import Refs from '../components/Refs/';
import Routing from '../components/Routing/';

const HOC = FieldsetHOCPureCalled;

class App extends Component {
  state = {
    legendHOC: "Rendered HOC"
  }

  renderHOC = arg => <HOC legend={this.state[arg]} />

  render() {

    return (
      <React.Fragment>
        <nav>
          <Navigation links={LINKS} />
        </nav>
        <main>
          <Switch>
            <Route path="/children/hello" render={() => (<h1>Yo, i.e. -- Hello!</h1>)} />
            <Route path="/children" component={Children} />
            <Route path="/context" component={Context} />
            <Route path="/lazy" component={Lazy} />
            <Route path="/HOCs" render={props => {
              //  
              return <HOC myprops={props} />
            }
            } />
            <Route path="/lifecycle" component={Lifecycle} />
            <Route path="/puritan" exact component={Puritan} />
            <Route path="/puritan/inner" component={Inner} />
            <Route path="/refs" component={Refs} />
            <Route path="/routing" component={Routing} />
            <Route path="/" render={() => (
              <React.Fragment>
                <h1>Yo, man!</h1>
                <p>Homepage is here</p>
              </React.Fragment>)
            } />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
