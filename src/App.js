import React, { Component } from 'react';
import 'normalize.css';

import NameBox from './components/NameBox/NameBox';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <main className="main">
          <NameBox/>
        </main>
      </div>
    );
  }
}

export default App;
