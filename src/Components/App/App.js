import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Characters from '../Characters/Characters';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({
      region: localStorage.getItem('region') || 'Global',
      hidden: localStorage.getItem('hidden'),
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
        <Characters class="characters-block" />
        <Footer class="footer-block" />
      </div>
    );
  }
}

export default App;
