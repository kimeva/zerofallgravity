import React, { Component } from 'react';
import styles from './Page.scss';

export class Page extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="red-block">
          <h1>GREEN</h1>
          <p>This is green</p>
        </div>
        <div className="blue-block">
          <h1>RED</h1>
          <p>This is red</p>
        </div>
        <div className="green-block">
          <h1>BLUE</h1>
          <p>This is blue</p>
        </div>
      </div>
    );
  }
}
