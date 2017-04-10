import React, { Component } from 'react';
import { MemberPic } from 'components';
import styles from './BackgroundVideo.scss';

export class BackgroundVideo extends Component {
  render() {
    return (
      <div className="fullscreen-bg">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <video loop muted autoPlay preload="auto" playsInline poster="static/images/zfg/zfg-bg-video-ss.jpg" className="fullscreen-bg__video">
          <source src="static/videos/zfg-bg-video.webm" type="video/webm"></source>
          <source src="static/videos/zfg-bg-video.mp4" type="video/mp4"></source>
          <source src="static/videos/zfg-bg-video.ogv" type="video/ogg"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}
