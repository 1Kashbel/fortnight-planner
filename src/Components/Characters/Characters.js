import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './Characters.css';
import 'react-select/dist/react-select.css';
class Characters extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={this.props.class + ' characters'}>
        <Select
          name="Characters"
          on
          optionRenderer={el => (
            <span>
              <img
                style={{ width: 30, height: 30 }}
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
          onChange={val => console.log(val.value)}
        />
        {/*{this.props.characters.map(char => (
            <option
              value={char.value}
              key={char.value}
              style={{
                display: 'inline-block',
                backgroundSize: '30px 30px',
                width: '30px; height: 30px',
                backgroundImage: `url('https://onepiece-treasurecruise.com/wp-content/uploads/f${char.value
                  .toString()
                  .padStart(4, '0')}.png')`,
              }}
            >
              {char.name}
            </option>
          ))}*/}
      </div>
    );
  }
}
Characters.propTypes = {
  characters: PropTypes.array,
};
export default Characters;
