import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="info-block">Info Block</div>
        <div className="tools-block">Tools Block</div>
        <div className="fortnights-block">Fortnights Block</div>
        <div className="characters-block">Characters Block</div>
        <Footer class="footer-block" />
      </div>
    );
  }
}

export default App;
