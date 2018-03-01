import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Characters from '../Characters/Characters';
import './App.css';
import Fortnights from '../Fortnights/Fortnights';

const fortnights = require('../../Data/fortnights');
const characters = require('../../Data/characters');

class App extends Component {
  componentWillMount() {
    let currentCharacters =
      JSON.parse(localStorage.getItem('currentCharacters')) || [];
    let currentFortnights = [];
    let usableCharacters = characters.filter(char =>
      fortnights.some(
        f => f.drops.indexOf(char.value.toString().padStart(4, '0')) > -1
      )
    );
    this.setState({
      region: localStorage.getItem('region') || 'Global',
      hidden: localStorage.getItem('hidden'),
      characters: usableCharacters,
      fortnights,
      currentCharacters,
      currentFortnights,
    });
  }

  componentDidMount() {
    this.updateFortnights();
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

  saveCharactersToStorage() {
    localStorage.setItem(
      'currentCharacters',
      JSON.stringify(this.state.currentCharacters)
    );
  }

  addCharacter(val) {
    let currentCharacters = this.state.currentCharacters.slice() || [];
    currentCharacters.push(val.value);
    this.setState({ currentCharacters });
  }

  removeCharacter(val) {
    let currentCharacters = this.state.currentCharacters.filter(c => c !== val);
    this.setState({ currentCharacters });
  }

  updateFortnights() {
    let currentFortnights = this.state.fortnights
      .slice()
      .filter(f =>
        this.state.currentCharacters.some(c => f.drops.indexOf(c) > -1)
      );
    this.setState({ currentFortnights });
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (
      prevState.currentCharacters.length !== this.state.currentCharacters.length
    ) {
      this.saveCharactersToStorage();
      this.updateFortnights();
    }
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
        <Fortnights
          class="fortnights-block"
          currentFortnights={this.state.currentFortnights}
          currentCharacters={this.state.currentCharacters}
          characters={this.state.characters}
        />
        <Characters
          class="characters-block"
          characters={this.state.characters}
          onAddCharacter={this.addCharacter.bind(this)}
          onRemoveCharacter={this.removeCharacter.bind(this)}
          currentCharacters={this.state.currentCharacters}
        />
        <Footer class="footer-block" />
      </div>
    );
  }
}

export default App;
