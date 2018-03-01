import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FortnightEntry.css';
import SmallCharacterEntry from '../SmallCharacterEntry/SmallCharacterEntry';
class FortnightEntry extends Component {
  componentWillMount() {
    const characters = this.props.currentCharacters;
    const drops = this.props.drops;
    this.setState({ characters, drops });
  }
  render() {
    return (
      <p style={{ marginTop: 50 }}>
        <img
          alt={this.props.thumb}
          style={{ width: 50, height: 50, float: 'left' }}
          src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${
            this.props.thumb
          }.png`}
        />
        <span className="fortnight-name">{this.props.name}</span>
        <span style={{ display: 'block' }}>
          {this.state.characters
            .filter(c => this.state.drops.indexOf(c) > -1)
            .map(c => <SmallCharacterEntry key={c} thumb={c} />)}
        </span>
      </p>
    );
  }
}

FortnightEntry.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  drops: PropTypes.array,
};

export default FortnightEntry;
