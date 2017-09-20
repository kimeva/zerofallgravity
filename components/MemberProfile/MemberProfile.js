import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MemberItem, ImageLoader } from 'components';
import { getImageSrc } from '../../helpers/util';
import styles from './MemberProfile.scss';

export class MemberProfile extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div>

        </div>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Montserrat:200,400);
        </style>
      </div>
    );
  }
}

MemberProfile.propTypes = {
  isRetina: PropTypes.bool
};

