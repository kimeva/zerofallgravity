import React, { Component } from 'react';
import { Page, Home } from 'components';

export default class extends Component {
  render () {
    return (
      <Page title='Home' isIndexPage>
        <Home />
      </Page>
    );
  }
}
