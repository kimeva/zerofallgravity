import React, { Component, PropTypes } from 'react';
import styles from './ImageLoader.scss';

export class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.state = {
      toggle: false,
      imgClassName: 'image'
    };
  }

  handleImageLoaded() {
    const loadToggle = this.state.toggle;
    this.setState({
      toggle: !loadToggle,
      imgClassName: 'image image-loaded'
    });
  }

  render() {
    const { fullSrc, thumbnailSrc } = this.props;
    return (
      <div
        className="cover"
        style={{ backgroundImage: `url(${thumbnailSrc}) no-repeat center center fixed` }}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <img
          onLoad={this.handleImageLoaded}
          ref="img"
          src={fullSrc}
          className={this.state.imgClassName}
        />
      </div>
    ); 
  }
}

ImageLoader.propTypes = {
  fullSrc: PropTypes.string,
  thumbnailSrc: PropTypes.string
};
