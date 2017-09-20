import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export class HeadComponent extends Component {
  render() {
    return (
      <Head>
        <meta charSet="utf-8"/>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible"/>
        <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon@2x.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon@3x.png" sizes="48x48"/>
      </Head>
    ); 
  }
}
