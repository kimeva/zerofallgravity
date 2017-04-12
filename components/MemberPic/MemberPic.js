import React, { Component, PropTypes } from 'react';
import styles from './MemberPic.scss';

export class MemberPic extends Component {
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
    let memberImg = null;
    if (this.state.error) {
      memberImg = (
        <img
          ref="img"
          src={thumbnailSrc}
          className={this.state.imgClassName}
        />
      );
    } else if (!this.state.loaded) {
      memberImg = (
        <img
          ref="img"
          src={thumbnailSrc}
          className={this.state.imgClassName}
        />
      );
    } else {
      memberImg = (
        <img
          ref="img"
          src={fullSrc}
          className={this.state.imgClassName}
        />
      );
    }
    return (
      <div
        className="member-pic"
        style={{ background: `url(${thumbnailSrc}) no-repeat center center fixed`, backgroundSize: '100% 100%'}}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {memberImg}
      </div>
    ); 
  }
}

MemberPic.propTypes = {
  fullSrc: PropTypes.string,
  thumbnailSrc: PropTypes.string
};
