import React, { Component } from 'react';

class SmallCharacterEntry extends Component {
  render() {
    return (
      <img
        alt={this.props.thumb}
        style={{ width: 30, height: 30 }}
        src={`https://onepiece-treasurecruise.com/wp-content/uploads/f${
          this.props.thumb
        }.png`}
      />
    );
  }
}

export default SmallCharacterEntry;
