import React, { Component } from 'react';
import isRetina from 'is-retina';
import { Page, About } from 'components';

export default class extends Component {
  render () {
    return (
      <Page title='About' >
        <About isRetina={isRetina()} />
      </Page>
    );
  }
}
