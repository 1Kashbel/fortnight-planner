import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Fortnights.css';
import FortnightEntry from '../FortnightEntry/FortnightEntry';

class Fortnights extends Component {
  render() {
    let fortnights = this.props.currentFortnights;
    return (
      <div className={this.props.class}>
        {fortnights.map(f => (
          <FortnightEntry
            key={f.thumb}
            name={f.name}
            thumb={f.thumb}
            drops={f.drops}
            currentCharacters={this.props.currentCharacters}
          />
        ))}
      </div>
    );
  }
}

Fortnights.propTypes = {
  class: PropTypes.string,
  currentCharacters: PropTypes.array,
  currentFortnights: PropTypes.array,
};
export default Fortnights;
