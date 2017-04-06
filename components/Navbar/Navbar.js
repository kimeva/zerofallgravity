import React, { Component } from 'react';
import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import styles from './Navbar.scss';

const home = {
  pathname: '/'
}

const about = {
  pathname: '/coming-soon'
}

const gigs = {
  pathname: '/coming-soon'
}

const contact = {
  pathname: 'mailto:zerofallgravity@gmail.com'
}

export class Navbar extends Component {
  componentWillMount() {
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div className="navbar-container">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Link href={home}>
          <a><div className="zfg-logo" /></a>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link href={about}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={gigs}>
              <a>Gigs</a>
            </Link>
          </li>
          <li>
            <Link href={contact}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
