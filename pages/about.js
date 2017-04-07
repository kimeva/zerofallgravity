import React, { Component } from 'react';
import Head from 'next/head';
import {
  Page,
  ImageLoader,
  Navbar,
  HeadComponent,
  Footer,
  About
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
          <title>Zero Fall Gravity | About</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
        />
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    );
  }
}
