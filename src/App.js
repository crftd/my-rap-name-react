import React, { Component } from 'react';
import 'normalize.css';

import NameGenerator from './components/NameGenerator/NameGenerator';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <main className="main">
          <NameGenerator />
        </main>
      </div>
    );
  }
}

export default App;
