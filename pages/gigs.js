import React, { Component } from 'react';
import { Layout, Gigs } from 'components';
import styles from 'styles/index.scss';

export default class extends Component{
  render() {
    return (
      <Layout title='Gigs' >
        <Gigs/>
      </Layout>
    );
  }
}
