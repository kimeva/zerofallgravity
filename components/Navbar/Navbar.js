import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Navbar.scss';

const about = {
  pathname: '/about'
}

const gigs = {
  pathname: '/about'
}

const contact = {
  pathname: '/about'
}

export class Navbar extends Component {
  render() {
    const href = '/';
    return (
      <div className="navbar-container">
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="zfg-logo" />
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
