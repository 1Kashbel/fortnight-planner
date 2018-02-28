import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

class Info extends React.Component {
  render() {
    const hidden = this.props.hidden === 'yes';
    return (
      <div className={this.props.class + ' info'}>
        <p>
          Region: {this.props.region}
          <a className="switch-region" onClick={this.props.onRegionChange}>
            {' '}
            (Switch)
          </a>
        </p>
        <p>
          <input
            id="hide-fortnights"
            type="checkbox"
            defaultChecked={hidden}
            onChange={this.props.onCheckboxChange}
          />
          <label htmlFor="hide-fortnights">
            Only show available fortnights
          </label>
        </p>
      </div>
    );
  }
}

Info.propTypes = {
  onCheckboxChange: PropTypes.func.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};
export default Info;
