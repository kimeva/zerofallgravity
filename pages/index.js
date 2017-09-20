import React, { Component } from 'react';
import { Page, BackgroundVideo, HomeFiller } from 'components';

export default class extends Component {
  render () {
    return (
      <Page title='Home' isIndexPage>
        <div>
          <BackgroundVideo />
          <HomeFiller />
        </div>
      </Page>
    );
  }
}
