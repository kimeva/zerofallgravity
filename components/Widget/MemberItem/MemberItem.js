import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageLoader } from 'components';
import { getImageAlt } from 'helpers/util';
import {
  MemberContainer,
  MemberDetails,
  MemberName,
  MemberRole,
  MemberSocialMedia
} from '../../Styled/About/Member';

export class MemberItem extends Component {
  renderSocialMediaIcons = (socialMedia) => {
    const socialMediaIcons = socialMedia.map((socialMedium) => {
      let socialMediumClassName = null;
      switch (socialMedium.type) {
        case 'facebook' : {
          socialMediumClassName = 'facebook-official'
          break;
        }
        case 'instagram' : {
          socialMediumClassName = 'instagram'
          break;
        }
        case 'youtube' : {
          socialMediumClassName = 'youtube-play'
          break;
        }
        case 'spotify' : {
          socialMediumClassName = 'spotify'
          break;
        }
      }
      return (
        <a key={socialMedium.url} target="_blank" href={socialMedium.url}>
          <i className={`social-media-icon fa fa-${socialMediumClassName}`} aria-hidden="true"></i>
        </a>
      );
    });
    return socialMediaIcons;
  }

  render() {
    const { resource, isRetina } = this.props;
    const { name, role, socialMedia, images } = resource;
    const image = isRetina ? images.profile['2x'] : images.profile['1x'];

    return (
      <MemberContainer>
        <ImageLoader
          fullSrc={image.fullSrc}
          thumbnailSrc={image.thumbnailSrc}
          imgAlt={getImageAlt('Member', `${name} | ${role}`)}
          isCover={false}
        />
        <MemberDetails>
          <MemberName>{name}</MemberName>
          <MemberRole>{role}</MemberRole>
          <MemberSocialMedia>
            {this.renderSocialMediaIcons(socialMedia)}
          </MemberSocialMedia>
        </MemberDetails>
      </MemberContainer>
    );
  }
}

MemberItem.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    socialMedia: PropTypes.array.isRequired,
    images: PropTypes.shape({
      profile: PropTypes.shape({
        "1x": PropTypes.shape({
          fullSrc: PropTypes.string.isRequired,
          thumbnailSrc: PropTypes.string.isRequired
        }).isRequired,
        "2x": PropTypes.shape({
          fullSrc: PropTypes.string.isRequired,
          thumbnailSrc: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  isRetina: PropTypes.bool.isRequired
};
