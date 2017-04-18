import React, { Component } from 'react';
import { Layout, ComingSoon } from 'components';
import styles from 'styles/index.scss';

export default class extends Component{
  render() {
    return (
      <Layout title='Coming Soon'>
        <ComingSoon/>
      </Layout>
    );
  }
}
