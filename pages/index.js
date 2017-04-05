import React, { Component } from 'react';
import Head from 'next/head';
import { Page, ImageLoader } from 'components'
import styles from 'styles/index.scss'
import { getBackgroundImage } from '../helper/util';

export default class extends Component{
  render() {
    const { full, thumbnail } = getBackgroundImage();
    console.log('full src      : ', full);
    console.log('thumbnail src : ', thumbnail);
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
        />
        {/* <Page />*/}
      </div>
    );
  }
}
