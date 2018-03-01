import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './Characters.css';
import 'react-select/dist/react-select.css';
import CharacterEntry from '../CharacterEntry/CharacterEntry';

class Characters extends React.Component {
  componentWillMount() {
    let characters = this.props.characters.filter(
      char =>
        this.props.currentCharacters.indexOf(
          char.value.toString().padStart(4, '0')
        ) === -1
    );

    this.setState({ characters });
  }
  render() {
    return (
      <div className={this.props.class + ' characters'}>
        <Select
          name="Characters"
          placeholder={'Find a character'}
          openOnClick={false}
          className={'characters-select'}
          autosize={false}
          onChange={this.props.onAddCharacter}
          optionRenderer={el => (
            <span>
              <img
                alt={el.value}
                style={{ width: 30, height: 30, float: 'left' }}
                src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${
                  el.value
                }.png`}
              />
              <option className={el.className} value={el.value}>
                {el.label}
              </option>
            </span>
          )}
          options={this.state.characters.map(char =>
            Object.create({
              value: char.value.toString().padStart(4, '0'),
              label: char.name,
              className: char.type,
            })
          )}
        />
        <div className={'characterList'}>
          {this.props.currentCharacters.map(e => (
            <CharacterEntry
              key={e}
              character={e}
              characters={this.props.characters}
              onRemoveButtonPress={this.props.onRemoveCharacter}
            />
          ))}
        </div>
      </div>
    );
  }
}

Characters.propTypes = {
  characters: PropTypes.array,
  onRemoveCharacter: PropTypes.func,
  onAddCharacter: PropTypes.func,
};
export default Characters;
