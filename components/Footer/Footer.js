import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Footer.scss';

export class Footer extends Component {
  render() {
    const href = '/';
    return (
      <div className="footer-container">
        <Head>
          <link rel="stylesheet" href="static/styles/font-awesome/css/font-awesome.min.css"/>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ul className="footer-links">
          <li>
            <a target="_blank" href="https://www.facebook.com/zerofallgravity/">
              <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/zerofallgravity/">
              <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p>
          &#9400; {(new Date()).getFullYear()} Zero Fall Gravity
        </p>
        <p>
          Background photo by: <a href="https://unsplash.com/@nathananderson">Nathan Anderson</a>
        </p>
      </div>
    );
  }
}
