import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { preventRightClick } from 'helpers/util';

const Loader = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const Cover = styled.div`
  position: fixed; 
  top: 0; 
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: -9000;  
`;

const Picture = styled.div`
  position: relative; 
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageContainer = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in, 1s -webkit-filter ease-in;
`;

export class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const img = new Image();

    img.onload = () => {
      this.setState({
        loaded: true
      });
    };

    img.onerror = () => {
      this.setState({
        error: true
      });
    };
  
    img.src = this.props.fullSrc;
  }

  renderImg = (fullSrc, thumbnailSrc, imgAlt) => {
    return (
      <ImageContainer
        style={{
          opacity: (this.state.error || !this.state.loaded) ? 0 : 1
        }}
        ref="img"
        alt={imgAlt}
        src={fullSrc}
      />
    )
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

    const bgStyle = {
      background: `url(${thumbnailSrc}) no-repeat center center/cover`,
      width: imgWidth,
      height: imgHeight,
      filter: (this.state.error || !this.state.loaded) ? 'blur(10px)' : 'blur(0)'
    };

    return isCover ? (
      <Loader>
        <Cover
          style={bgStyle}
          onContextMenu={preventRightClick}
        >
          {this.renderImg(fullSrc, thumbnailSrc, imgAlt)}
        </Cover>
      </Loader>) : (
      <Loader>
        <Picture
          style={bgStyle}
          onContextMenu={preventRightClick}
        >
          {this.renderImg(fullSrc, thumbnailSrc, imgAlt)}
        </Picture>
      </Loader>
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
