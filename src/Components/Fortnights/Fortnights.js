import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Fortnights.css';
import FortnightEntry from '../FortnightEntry/FortnightEntry';
import fetchedFortnights from '../../Utils/CurrentFortnights';

class Fortnights extends Component {
  componentDidMount = () => {
    fetchedFortnights()
      .then(data => {
        this.setState({ fetchedFortnights: data });
      })
      .catch(err => console.log(err));
  };

  render() {
    let fortnights = this.props.currentFortnights;
    return (
      <div className={this.props.class}>
        <h3 style={{ marginTop: 5 }}>Fortnights</h3>
        <div style={{ width: '30%', textAlign: 'center', margin: 'auto' }}>
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
