import React, { Component } from 'react';
import styles from './ComingSoon.scss';

export class ComingSoon extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="coming-soon-panel">
          <p>// coming soon</p>
        </div>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Cutive+Mono);
        </style>
      </div>
    );
  }
}
