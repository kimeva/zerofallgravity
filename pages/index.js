import React, { Component } from 'react';
import Head from 'next/head';
import {
  Page,
  BackgroundVideo,
  Navbar,
  HeadComponent,
  Footer
} from 'components';
import { getBackgroundImage } from '../helper/util';
import styles from 'styles/index.scss';

export default class extends Component {
  render() {
    const { full, thumbnail } = getBackgroundImage();
    return (
      <div>
        <HeadComponent />
        <Head>
          <title>Zero Fall Gravity</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <BackgroundVideo
        />
        <Navbar/>
        <div className="filler"></div>
        <Footer/>
      </div>
    );
  }
}
