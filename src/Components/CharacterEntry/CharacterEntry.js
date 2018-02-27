import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterEntry.css';
class CharacterEntry extends Component {
  render() {
    const character = this.props.character;
    return (
      <p>
        <img
          alt={character}
          style={{ width: 30, height: 30, float: 'left' }}
          src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${character}.png`}
        />
        <span>
          {
            this.props.characters.find(
              c => c.value.toString().padStart(4, '0') === character
            ).name
          }
        </span>
        <span
          onClick={() => this.props.onRemoveButtonPress(this.props.character)}
          className={'remove-button'}
        />
      </p>
    );
  }
}

CharacterEntry.propTypes = {
  characters: PropTypes.array,
  character: PropTypes.string,
  onRemoveButtonPress: PropTypes.func,
};

export default CharacterEntry;
