import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Navbar.scss';

const home = {
  pathname: '/'
}

const about = {
  pathname: '/about'
}

const gigs = {
  pathname: '/coming-soon'
}

const contact = {
  pathname: 'mailto:zerofallgravity@gmail.com'
}

export class Navbar extends Component {
  renderLink = (title, activeLink) => {
    if (title.toLowerCase() === activeLink.toLowerCase()) {
      return (
        <a className="active">{title}</a>
      );
    } else {
      return (
        <a>{title}</a>
      );
    }
  }

  render() {
    const activeLink = this.props.active ? this.props.active : '';
    return (
      <div className="navbar-container">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Link href={home}>
          <a><div className="zfg-logo" /></a>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link href={about}>
              <span>{this.renderLink('About', activeLink)}</span>
            </Link>
          </li>
          <li>
            <Link href={gigs}>
              <span>{this.renderLink('Gigs', activeLink)}</span>
            </Link>
          </li>
          <li>
            <span><a href={contact.pathname}>Contact</a></span>
          </li>
        </ul>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Montserrat:200);
        </style>
      </div>
    );
  }
}

Navbar.propTypes = {
  active: PropTypes.string
};
