import React, { Component } from 'react';
import { Page, Gigs } from 'components';

export default class extends Component {
  render () {
    return (
      <Page title='About' >
        <Gigs />
      </Page>
    );
  }
}

