import React, { Component, PropTypes } from 'react';
import styles from './ImageLoader.scss';

export class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      imgClassName: 'image'
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true,
        imgClassName: 'image image-loaded'
      });
    };
    img.onerror = () => {
      this.setState({
        error: true,
        imgClassName: 'image'
      });
    };
    img.src = this.props.fullSrc;
  }

  render() {
    const { fullSrc, thumbnailSrc } = this.props;
    let bgImg = null;
    if (this.state.error) {
      bgImg = (
        <img
          ref="img"
          src={thumbnailSrc}
          className={this.state.imgClassName}
        />
      );
    } else if (!this.state.loaded) {
      bgImg = (
        <img
          ref="img"
          src={thumbnailSrc}
          className={this.state.imgClassName}
        />
      );
    } else {
      bgImg = (
        <img
          ref="img"
          src={fullSrc}
          className={this.state.imgClassName}
        />
      );
    }
    return (
      <div
        className="cover"
        style={{ background: `url(${thumbnailSrc}) no-repeat center center fixed`, backgroundSize: '100% 100%' }}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {bgImg}
      </div>
    ); 
  }
}

ImageLoader.propTypes = {
  fullSrc: PropTypes.string,
  thumbnailSrc: PropTypes.string
};
