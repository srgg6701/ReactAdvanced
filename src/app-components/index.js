import React, { Component } from 'react';

import Navigation from '../components/Navigation/';
import Children from '../components/Children/';
import Context from '../components/Context/';
import Lazy from '../components/Lazy/';
import Routing from '../components/Routing/';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Git', to: 'https://github.com/srgg6701/ReactAdvanced' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navigation links={LINKS} />
      </div>
    );
  }
}

export default App;
