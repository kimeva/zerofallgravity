import React, { Component } from 'react';
import { Layout, MemberProfile } from 'components';
import isRetina from 'is-retina';
import styles from 'styles/index.scss';

export default class extends Component{
  render() {
    return (
      <Layout title='About - Draft' >
        <MemberProfile />
      </Layout>
    );
  }
}
