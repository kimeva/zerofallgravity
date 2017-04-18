import React, { Component, PropTypes } from 'react';
import { ImageLoader } from 'components';
import { getImageAlt } from 'helpers/util';
import styles from './MemberItem.scss';

export class MemberItem extends Component {
  renderSocialMediaIcons = (socialMedia) => {
    const socialMediaIcons = socialMedia.map((eachSocialMedia) => {
      let socialMediaClassName = null;
      switch (eachSocialMedia.type) {
        case 'facebook' : {
          socialMediaClassName = 'fa-facebook-official'
          break;
        }
        case 'instagram' : {
          socialMediaClassName = 'fa-instagram'
          break;
        }
        case 'youtube' : {
          socialMediaClassName = 'fa-youtube-play'
          break;
        }
        case 'spotify' : {
          socialMediaClassName = 'fa-spotify'
          break;
        }
      }
      return (
        <a key={eachSocialMedia.url} target="_blank" href={eachSocialMedia.url}>
          <i className={`social-media-icon fa ${socialMediaClassName}`} aria-hidden="true"></i>
        </a>
      );
    });
    return socialMediaIcons;
  }

  render() {
    const { name, role, socialMedia, image } = this.props.resource;

    return (
      <div className="box">
        <ImageLoader
          fullSrc={image.fullSrc}
          thumbnailSrc={image.thumbnailSrc}
          imgAlt={getImageAlt('Member', `${name} | ${role}`)}
          isCover={false}
        />
        <div className="member-details">
          <span className="member-name">{name}</span>
          <span className="member-role">{role}</span>
          <span className="social-media-icons">
            {this.renderSocialMediaIcons(socialMedia)}
          </span>
        </div>
      </div>
    );
  }
}

MemberItem.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    socialMedia: PropTypes.array.isRequired,
    image: PropTypes.shape({
      fullSrc: PropTypes.string.isRequired,
      thumbnailSrc: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
