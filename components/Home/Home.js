import React, { Component } from 'react';
import { BackgroundVideo } from 'components';
import styles from './Home.scss';

export class Home extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <BackgroundVideo/>
        <div className="filler"></div>
      </div>
    );
  }
}
