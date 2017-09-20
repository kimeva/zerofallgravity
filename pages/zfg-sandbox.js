import React, { Component } from 'react';
import Head from 'next/head';
import 'whatwg-fetch';
import {
  Page,
  ImageLoader,
  Navbar,
  HeadComponent,
  Footer,
  About
} from 'components';
import { getBackgroundImage } from '../helpers/util';
import styles from 'styles/index.scss';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      pics: null
    };
  }

  componentDidMount() {
    this.getInstagramFeed();
  }

  getInstagramFeed = () => {
   // continue doing this when you have time
   const ACCESS_TOKEN = '1012042738.e20a132.50c237bf1cb64e01a785b9d07dc6bd3f';
   const USER_ID = '1012042738';
   const url = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?access_token=${ACCESS_TOKEN}`;
    fetch(url, {
      mode: 'no-cors'
    })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      } else {
        this.setState({
          loaded: true,
          pics: response
        });
      }
    }).catch((error) => {
      this.setState({
        error: true,
        pics: null
      });
    });
  }

  render() {
    const { full, thumbnail } = getBackgroundImage(false);

    if (this.state.loaded) {
      console.log('pics : ', this.state.pics);
    }

    return (
      <div>
        <HeadComponent />
        <Head>
          <title>Zero Fall Gravity | Sandbox</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
          imgAlt="Zero Fall Gravity | Background | Space by Nathan Anderson"
          isCover
        />
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}
