import React, { Component } from 'react';
import { Layout, Home } from 'components';
import styles from 'styles/index.scss';

export default class extends Component {
  render() {
    return (
      <Layout isIndexPage>
        <Home/>
      </Layout>
    );
  }
}
