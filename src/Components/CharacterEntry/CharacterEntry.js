import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterEntry.css';
class CharacterEntry extends Component {
  constructor(props) {
    super(props);

    let character = {
      value: 0,
      name: '',
    };
    this.state = {
      character,
    };
  }

  componentDidMount = () => {
    const character = this.props.characters.find(
      c => c.value.toString().padStart(4, '0') === this.props.character
    );
    this.setState({ character });
  };

  render() {
    return (
      <p>
        <img
          alt={this.state.character}
          style={{ width: 30, height: 30, float: 'left' }}
          src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${this.state.character.value
            .toString()
            .padStart(4, '0')}.png`}
        />
        <span>{this.state.character.name}</span>
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
