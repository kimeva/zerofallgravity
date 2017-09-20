import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MemberItem, ImageLoader } from 'components';
import { getImageSrc } from '../../../helpers/util';
import {
  AboutSection,
  AboutDetails,
  AboutMember
} from 'components/Styled/About';
import { memberService } from 'services/zfg';

export class About extends Component {
  static defaultProps = {
    members: memberService.fetchMembers()
  };

  render() {
    const { members, isRetina } = this.props;
    
    if (members == null) {
      return null;
    }

    return (
      <AboutSection>
        <AboutDetails>
          <p>
            Zero Fall Gravity (ZFG) was formed in 2015 by a group of rock and metal enthusiasts keen to bring back the head-banging nostalgic hits of old school rock 'n' roll classics to the local music scene. Some notable gigs that ZFG have played for include SMU's Starry Nite and RWS’ Coliseum Jam 2015, a nation-wide band competition, where they emerged as finalists. Looking to engage the audience with their high-octane energy, ZFG is a band that strives to continually evolve and play to please.
          </p>
        </AboutDetails>
        <AboutMember>
          {members.map((member, idx) => (
            <MemberItem key={idx} resource={member} isRetina={isRetina}/>
          ))}
        </AboutMember>
      </AboutSection>
    );
  }
}

About.propTypes = {
  isRetina: PropTypes.bool
};

