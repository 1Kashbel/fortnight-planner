import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FortnightEntry.css';
class FortnightEntry extends Component {
  render() {
    const characters = this.props.currentCharacters;
    return (
      <p>
        <img
          alt={this.props.thumb}
          style={{ width: 50, height: 50 }}
          src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${
            this.props.thumb
          }.png`}
        />
        <span className="fortnight-name">{this.props.name}</span>
        <span>{characters.map(c => this.props.drops.indexOf(c) > -1)}</span>
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
