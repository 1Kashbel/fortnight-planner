import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './Characters.css';
import 'react-select/dist/react-select.css';
import CharacterEntry from '../CharacterEntry/CharacterEntry';

class Characters extends React.Component {
  componentWillMount() {
    let currentCharacters =
      JSON.parse(localStorage.getItem('currentCharacters')) || [];
    this.setState({ currentCharacters });
  }

  addCharacter(val) {
    let currentCharacters = this.state.currentCharacters.slice();
    currentCharacters.push(val.value);
    this.setState({ currentCharacters });
  }

  removeCharacter(val) {
    let currentCharacters = this.state.currentCharacters.filter(c => c !== val);
    this.setState({ currentCharacters });
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (
      prevState.currentCharacters.length !== this.state.currentCharacters.length
    ) {
      this.saveCharactersToStorage();
    }
  }

  saveCharactersToStorage() {
    localStorage.setItem(
      'currentCharacters',
      JSON.stringify(this.state.currentCharacters)
    );
  }
  render() {
    let characters = this.props.characters.filter(
      char =>
        this.state.currentCharacters.indexOf(
          char.value.toString().padStart(4, '0')
        ) === -1
    );
    return (
      <div className={this.props.class + ' characters'}>
        <Select
          name="Characters"
          placeholder={'Find a character'}
          openOnClick={false}
          className={'characters-select'}
          autosize={false}
          onChange={this.addCharacter.bind(this)}
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
          options={characters.map(char =>
            Object.create({
              value: char.value.toString().padStart(4, '0'),
              label: char.name,
              className: char.type,
            })
          )}
        />
        <div className={'characterList'}>
          {this.state.currentCharacters.map(e => (
            <CharacterEntry
              key={e}
              character={e}
              characters={this.props.characters}
              onRemoveButtonPress={this.removeCharacter.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

Characters.propTypes = {
  characters: PropTypes.array,
};
export default Characters;
