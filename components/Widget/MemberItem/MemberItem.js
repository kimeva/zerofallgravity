import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ImageLoader } from 'components';
import { getImageAlt } from 'helpers/util';
import {
  MemberContainer,
  MemberDetails,
  MemberName,
  MemberRole,
  MemberSocialMedia,
  Overlay
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
    const { id, name, role, socialMedia, images } = resource;
    const image = isRetina ? images.profile['2x'] : images.profile['1x'];
    const nameParam = name.first.replace(' ', '').toLowerCase();

    return (
      <Link prefetch href={`/member?id=${id}`} as={`/about/${nameParam}`}>
      <MemberContainer>
        <ImageLoader
          fullSrc={image.fullSrc}
          thumbnailSrc={image.thumbnailSrc}
          imgAlt={getImageAlt('Member', `${name.full} | ${role}`)}
          isCover={false}
        />
        <Overlay />
        <MemberDetails>
          <MemberName>{name.full}</MemberName>
          <MemberRole>{role}</MemberRole>
          <MemberSocialMedia>
            {this.renderSocialMediaIcons(socialMedia)}
          </MemberSocialMedia>
        </MemberDetails>
      </MemberContainer>
      </Link>
    );
  }
}

MemberItem.propTypes = {
  resource: PropTypes.object.isRequired
};
