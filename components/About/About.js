import React, { Component, PropTypes } from 'react';
import { MemberItem, ImageLoader } from 'components';
import { getImageSrc } from '../../helpers/util';
import styles from './About.scss';

export class About extends Component {
  renderMemberItems = () => {
    // read member data
    const memberData = require('./data/members.json');
    
    // map member details into grid
    const members = memberData.map((eachMember) => {
      eachMember.image.fullSrc = getImageSrc(this.props.isRetina, eachMember.image.fullSrc);
      return (
        <MemberItem key={eachMember.id} resource={eachMember} />
      );
    });
    return members;
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="detail-panel">
          <div className="detail-container"> 
            <p>
              Zero Fall Gravity (ZFG) was formed in 2015 by a group of rock and metal enthusiasts keen to bring back the head-banging nostalgic hits of old school rock 'n' roll classics to the local music scene. Some notable gigs that ZFG have played for include SMU's Starry Nite and RWS’ Coliseum Jam 2015, a nation-wide band competition, where they emerged as finalists. Looking to engage the audience with their high-octane energy, ZFG is a band that strives to continually evolve and play to please.
            </p>
          </div>
          <div className="detail-members-container">
            {this.renderMemberItems()}
          </div>
        </div>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Montserrat:200,400);
        </style>
      </div>
    );
  }
}

About.propTypes = {
  isRetina: PropTypes.bool
};

