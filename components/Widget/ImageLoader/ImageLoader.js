import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageLoader.scss';
import { preventRightClick } from 'helpers/util';

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

  renderImg = (fullSrc, thumbnailSrc, imgAlt) => {
    const img = (this.state.error || !this.state.loaded) ?
      <img
        className="image"
        ref="img"
        alt={imgAlt}
        src={thumbnailSrc}
      />
    :
      <img
        className="image image-loaded"
        ref="img"
        alt={imgAlt}
        src={fullSrc}
      />
    ;

    return img;
  }

  render() {
    const {
      fullSrc,
      thumbnailSrc
    } = this.props;

    const imgWidth = this.props.width ? this.props.width : '100%';
    const imgHeight = this.props.height ? this.props.height : '100%';
    const imgAlt = this.props.imgAlt ? this.props.imgAlt : 'Zero Fall Gravity';
    const isCover = this.props.isCover ? this.props.isCover : false;

    return (
      <div
        className={isCover ? "cover" : "picture"}
        style={{
          background: `url(${thumbnailSrc}) no-repeat center center fixed`,
          backgroundSize: '100% 100%',
          width: imgWidth,
          height: imgHeight
        }}
        onContextMenu={preventRightClick}
      >
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {this.renderImg(fullSrc, thumbnailSrc, imgAlt)}
      </div>
    ); 
  }
}

ImageLoader.propTypes = {
  fullSrc: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  imgAlt: PropTypes.string,
  isCover: PropTypes.bool
};
