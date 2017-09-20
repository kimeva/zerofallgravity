import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageLoader } from 'components';
import { getImageAlt, getBoxWidthClass, getBoxHeightClass, getFontSizeClass } from 'helpers/util';
import styles from './GigItem.scss';

export class GigItem extends Component {
  render() {
    const { title, subtitle, image } = this.props.resource;
    const size = this.props.size ? this.props.size : 'square-sm'
    let boxWidth = null;
    let boxHeight = null;
    let titleFontSize = null;
    let subtitleFontSize = null;

    switch (size) {
      case 'rectangle-lg-tall': {
        boxWidth=getBoxWidthClass(12);
        boxHeight=getBoxHeightClass(8);
        titleFontSize = getFontSizeClass('xl');
        subtitleFontSize = getFontSizeClass('md');
        break;
      }
      case 'rectangle-lg-short': {
        boxWidth=getBoxWidthClass(12);
        boxHeight=getBoxHeightClass(4);
        titleFontSize = getFontSizeClass('xl');
        subtitleFontSize = getFontSizeClass('md');
        break;
      }
      case 'rectangle-half': {
        boxWidth=getBoxWidthClass(6);
        boxHeight=getBoxHeightClass(4);
        titleFontSize = getFontSizeClass('sm');
        subtitleFontSize = getFontSizeClass('xs');
        break;
      }
      case 'square-md': {
        boxWidth=getBoxWidthClass(8);
        boxHeight=getBoxHeightClass(8);
        titleFontSize = getFontSizeClass('lg');
        subtitleFontSize = getFontSizeClass('sm');
        break;
      }
      default: {
        boxWidth=getBoxWidthClass(4);
        boxHeight=getBoxHeightClass(4);
        titleFontSize = getFontSizeClass('sm');
        subtitleFontSize = getFontSizeClass('xs');
        break;
      }
    }

    return (
      <div className={`box ${boxWidth} ${boxHeight}`}>
        <ImageLoader
          fullSrc={image.fullSrc}
          thumbnailSrc={image.thumbnailSrc}
          imgAlt={getImageAlt('Gig', `${title} | ${subtitle}`)}
          isCover={false}
        />
        <div className="gig-details">
          <span className={`gig-title ${titleFontSize}`}>{title}</span>
          <span className={`gig-subtitle ${subtitleFontSize}`}>{subtitle}</span>
        </div>
      </div>
    );
  }
}

GigItem.propTypes = {
  resource: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.shape({
      fullSrc: PropTypes.string.isRequired,
      thumbnailSrc: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  size: PropTypes.string
};
