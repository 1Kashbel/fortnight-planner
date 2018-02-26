import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Characters from '../Characters/Characters';
import './App.css';

const fortnights = require('../../Data/fortnights');
const characters = require('../../Data/characters');

class App extends Component {
  componentWillMount() {
    let usableCharacters = characters.filter(char =>
      fortnights.some(
        f => f.drops.indexOf(char.value.toString().padStart(4, '0')) > -1
      )
    );

    this.setState({
      region: localStorage.getItem('region') || 'Global',
      hidden: localStorage.getItem('hidden'),
      characters: usableCharacters,
    });
  }

  toggleRegion() {
    let region = this.state.region === 'Global' ? 'Japan' : 'Global';
    this.setState({ region: region });
    localStorage.setItem('region', region);
  }

  toggleHidden() {
    let hidden = this.state.hidden === 'yes' ? 'no' : 'yes';
    this.setState({ hidden: hidden });
    localStorage.setItem('hidden', hidden);
  }

  render() {
    return (
      <div className="container">
        <Info
          class="info-block"
          onCheckboxChange={this.toggleHidden.bind(this)}
          onRegionChange={this.toggleRegion.bind(this)}
          hidden={this.state.hidden}
          region={this.state.region}
        />
        <div className="tools-block">Tools Block</div>
        <div className="fortnights-block">Fortnights Block</div>
        <Characters
          class="characters-block"
          characters={this.state.characters}
        />
        <Footer class="footer-block" />
      </div>
    );
  }
}

export default App;
