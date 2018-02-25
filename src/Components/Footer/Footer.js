import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <p className={this.props.class + ' footer'}>
        Version 1.0. Made by Kashbel -{' '}
        <a
          href="https://github.com/1Kashbel/fortnight-planner"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github Repo
        </a>
      </p>
    );
  }
}

export default Footer;
