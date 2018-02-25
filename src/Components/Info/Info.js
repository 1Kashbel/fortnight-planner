import React from 'react';
import './Info.css';

class Info extends React.Component {
  componentWillMount() {
    this.setState({
      region: localStorage.getItem('region') || 'Global',
      hidden: localStorage.getItem('hidden'),
    });
  }

  toggleRegion() {
    let region = this.state.region === 'Global' ? 'Japan' : 'Global';
    this.setState({ region: region });
    localStorage.setItem('region', region);
  }

  toggleHidden() {
    let hidden = this.state.hidden === 'yes' ? 'no' : 'yes';
    this.setState({ hidden: hidden });
    localStorage.setItem('hidden', hidden);
  }

  render() {
    const hidden = this.state.hidden === 'yes';
    return (
      <div className={this.props.class + ' info'}>
        <p>
          Region: {this.state.region}
          <a className="switch-region" onClick={this.toggleRegion.bind(this)}>
            (Switch)
          </a>
        </p>
        <p>
          <input
            type="checkbox"
            defaultChecked={hidden}
            onChange={this.toggleHidden.bind(this)}
          />
          <label>Only show available fortnights</label>
        </p>
      </div>
    );
  }
}

export default Info;
