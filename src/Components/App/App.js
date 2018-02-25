import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Info class="info-block" />
        <div className="tools-block">Tools Block</div>
        <div className="fortnights-block">Fortnights Block</div>
        <div className="characters-block">Characters Block</div>
        <Footer class="footer-block" />
      </div>
    );
  }
}

export default App;
