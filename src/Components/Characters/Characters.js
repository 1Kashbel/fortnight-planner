import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './Characters.css';
import 'react-select/dist/react-select.css';

class Characters extends React.Component {
  componentWillMount() {
    let currentCharacters =
      JSON.parse(localStorage.getItem('currentCharacters')) || [];
    this.setState({ currentCharacters });
  }

  addCharacter(val) {
    let currentCharacters = this.state.currentCharacters;
    currentCharacters.push(val.value);
    this.setState(currentCharacters);
    localStorage.setItem(
      'currentCharacters',
      JSON.stringify(currentCharacters)
    );
  }

  render() {
    console.log(this.state.currentCharacters);
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
          options={this.props.characters.map(char =>
            Object.create({
              value: char.value.toString().padStart(4, '0'),
              label: char.name,
              className: char.type,
            })
          )}
        />
        <div className={'characterList'}>
          {this.state.currentCharacters.map(e => (
            <p>
              <span key={e} className={'character'}>
                {e}
              </span>
            </p>
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
