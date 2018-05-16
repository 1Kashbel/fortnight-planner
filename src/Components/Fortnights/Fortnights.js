import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Fortnights.css';
import FortnightEntry from '../FortnightEntry/FortnightEntry';
import fetchFortnights from '../../Utils/CurrentFortnights';

class Fortnights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fortnights: [],
    };
  }

  componentDidMount = () => {
    this.fetchCurrentFortnights();
  };

  fetchCurrentFortnights = () => {
    let fetchedFortnights = JSON.parse(sessionStorage.getItem('fetchedFortnights'));
    if (this.props.onlyAvailable) {
      if (!fetchedFortnights) {
        fetchFortnights(this.props.region)
          .then(data => {
            this.setState({ fetchedFortnights: data });
            let fortnights = this.props.currentFortnights;
            if (this.props.onlyAvailable) {
              fortnights = fortnights.filter(
                f => this.state.fetchedFortnights.indexOf(f.thumb) > -1
              );
            }
            this.setState({ fortnights });
            sessionStorage.setItem('fetchedFortnights', JSON.stringify(fortnights));
          })
          .catch(err => console.log(err));
      } else {
        this.setState({ fortnights: fetchedFortnights });
      }
    } else {
      this.setState({ fortnights: this.props.currentFortnights });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.onlyAvailable !== prevProps.onlyAvailable ||
      this.props.currentCharacters.length !== prevProps.currentCharacters.length ||
      this.props.region !== prevProps.region ||
      this.props.currentFortnights.length !== prevProps.currentFortnights.length
    )
      this.fetchCurrentFortnights();
  };

  render() {
    return (
      <div className={this.props.class}>
        <h3 style={{ marginTop: 5 }}>Fortnights</h3>
        <div style={{ width: '30%', textAlign: 'center', margin: 'auto' }}>
          {this.state.fortnights.map(f => (
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
