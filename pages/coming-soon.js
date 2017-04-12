import React, { Component } from 'react';
import Head from 'next/head';
import {
  Page,
  ImageLoader,
  Navbar,
  HeadComponent,
  Footer
} from 'components';
import { getBackgroundImage } from '../helper/util';
import styles from 'styles/index.scss';

export default class extends Component{
  render() {
    const { full, thumbnail } = getBackgroundImage();
    return (
      <div>
        <HeadComponent />
        <Head>
          <title>Zero Fall Gravity | Coming Soon</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
        />
        <Navbar/>
        <div className="coming-soon-panel">
          <p>// coming soon</p>
        </div>
        <Footer/>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Cutive+Mono);
        </style>
      </div>
    );
  }
}
