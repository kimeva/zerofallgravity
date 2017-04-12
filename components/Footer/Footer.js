import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ul className="footer-links">
          <li>
            <a target="_blank" href="https://www.facebook.com/zerofallgravity/">
              &#xfeff;<i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/zerofallgravity/">
            	&#xfeff;<i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UC3aZoRX6p_L7zUzGBbkLbFg/">
              &#xfeff;<i className="social-media-icon fa fa-youtube-play" aria-hidden="true"></i>
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
