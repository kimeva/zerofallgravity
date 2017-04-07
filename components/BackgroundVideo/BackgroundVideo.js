import React, { Component } from 'react';
import { MemberPic } from 'components';
import styles from './BackgroundVideo.scss';

export class BackgroundVideo extends Component {
  render() {
    const vidSrc = 'https://www.youtube.com/embed/wbHVyzHo9dg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=wbHVyzHo9dg';
    return (
      <div className="fullscreen-bg">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <iframe frameBorder="0" allowFullScreen className="fullscreen-bg__video"
          src={vidSrc}>
        </iframe>
      </div>
    );
  }
}
