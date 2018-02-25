import React from 'react';

const fortnights = require('../../Data/fortnights');
const characters = require('../../Data/characters');

class Characters extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <div className={this.props.class + ' characters'}>
        {/* {characters.map(char => <p key={char.value}>{char.name}</p>)} */}
      </div>
    );
  }
}

export default Characters;
