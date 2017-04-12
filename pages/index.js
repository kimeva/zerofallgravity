import React, { Component } from 'react';
import Head from 'next/head';
import {
  Page,
  ImageLoader,
  BackgroundVideo,
  Navbar,
  HeadComponent,
  Footer
} from 'components';
import { getBackgroundVideoImage } from '../helper/util';
import styles from 'styles/index.scss';

export default class extends Component {
  render() {
    const { full, thumbnail } = getBackgroundVideoImage();
    return (
      <div>
        <HeadComponent />
        <Head>
          <title>Zero Fall Gravity</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
        />
        <BackgroundVideo
        />
        <Navbar/>
        <div className="filler"></div>
        <Footer/>
      </div>
    );
  }
}
