import React, { Component } from 'react';
import { BackgroundVideo, HomeFiller } from 'components';

export class Home extends Component {
  render() {
    return (
      <div>
        <BackgroundVideo/>
        <HomeFiller />
      </div>
    );
  }
}
