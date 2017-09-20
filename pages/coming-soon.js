import React, { Component } from 'react';
import { Page, ComingSoonPanel } from 'components';

export default class extends Component {
  render () {
    return (
      <Page title='Gigs'>
        <ComingSoonPanel>
          <p>// coming soon</p>
        </ComingSoonPanel>
      </Page>
    );
  }
}
