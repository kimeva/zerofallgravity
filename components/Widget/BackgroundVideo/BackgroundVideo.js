import React, { Component } from 'react';
import { ImageLoader } from 'components';
import { getBackgroundImage } from 'helpers/util';
import 'whatwg-fetch';
import styles from './BackgroundVideo.scss';

export class BackgroundVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      vidClassName: 'fullscreen-bg__video'
    };
  }

  componentDidMount() {
    const url = 'static/videos/zfg-bg-video.mp4';
    fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      } else {
        this.setState({
          loaded: true,
          vidClassName: 'fullscreen-bg__video video-loaded'
        });
      }
    }).catch((error) => {
      this.setState({
        error: true,
        vidClassName: 'fullscreen-bg__video'
      });
    });
  }

  render() {
    const { full, thumbnail } = getBackgroundImage(false);
    let bgVideo = null;
    if (this.state.error) {
      bgVideo = (
        <video
          loop muted autoPlay playsInline
          preload="auto"
          className={this.state.vidClassName}
        >
          <source src="static/videos/zfg-bg-video.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      );
    } else if (!this.state.loaded) {
      bgVideo = (
        <video
          loop muted autoPlay playsInline
          preload="auto"
          className={this.state.vidClassName}
        >
          <source src="static/videos/zfg-bg-video.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      );
    } else {
      bgVideo = (
        <video
          loop muted autoPlay playsInline
          preload="auto"
          className={this.state.vidClassName}
        >
          <source src="static/videos/zfg-bg-video.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <div className="fullscreen-bg">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {bgVideo}
      </div>
    );
  }
}
