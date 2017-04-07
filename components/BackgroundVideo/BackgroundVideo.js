import React, { Component } from 'react';
import { MemberPic } from 'components';
import styles from './BackgroundVideo.scss';

export class BackgroundVideo extends Component {
  render() {
    const webmSrc = 'https://drive.google.com/uc?export=download&id=0BxTLWA_Dv0TtelpPbXdSVUQwc00';
    const mp4Src = 'https://drive.google.com/uc?export=download&id=0BxTLWA_Dv0TtLUNHSzN4MVpMWXc';
    const ogvSrc = 'https://drive.google.com/uc?export=download&id=0BxTLWA_Dv0TtcTBJSFRkek52clk';
    return (
      <div className="fullscreen-bg">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <video loop muted autoplay poster="static/images/zfg/zfg-bg-video-ss.jpg" className="fullscreen-bg__video">
          <source src={webmSrc} type="video/webm"></source>
          <source src={mp4Src} type="video/mp4"></source>
          <source src={ogvSrc} type="video/ogg"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}
