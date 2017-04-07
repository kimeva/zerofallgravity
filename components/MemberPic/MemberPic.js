import React, { Component, PropTypes } from 'react';
import styles from './MemberPic.scss';

export class MemberPic extends Component {
  componentWillMount() {
    this.state = {
      toggle: false,
      imgClassName: 'image'
    };
  }

  handleImageLoaded = () => {
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
        className="member-pic"
        style={{ background: `url(${thumbnailSrc}) no-repeat center center fixed`, backgroundSize: '100% 100%'}}>
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

MemberPic.propTypes = {
  fullSrc: PropTypes.string,
  thumbnailSrc: PropTypes.string
};
