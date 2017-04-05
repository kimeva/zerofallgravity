import React, { Component } from 'react';
import Head from 'next/head';
import { Page, ImageLoader, Navbar } from 'components'
import { getBackgroundImage } from '../helper/util';
import styles from 'styles/index.scss'

export default class extends Component{
  render() {
    const { full, thumbnail } = getBackgroundImage();
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
        />
        <Navbar/>
        {/* <Page />*/}
      </div>
    );
  }
}
