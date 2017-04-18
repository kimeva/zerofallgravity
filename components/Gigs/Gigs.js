import React, { Component } from 'react';
import { ImageLoader, GigItem } from 'components';
import styles from './Gigs.scss';

export class Gigs extends Component {
  renderGigItems = () => {
    // read gig data
    const memberData = require('./data/gigs.json');
    
    // map gig details into grid
    // const members = memberData.map((eachMember) => {
    //   return (
    //     <GigItem resource={eachMember} />
    //   );
    // });
    const members = [];
    for (let i=0; i<memberData.length; i++) {
      if (i==0) {
        members.push(
          <GigItem
            resource={memberData[i]}
            size='rectangle-lg-tall'
          />
        );
      }
      if (i==1) {
        members.push(
          <GigItem
            resource={memberData[i]}
            size='square-md'
          />
        );
      }
      if (i>1 && i<4) {
        members.push(
          <GigItem
            resource={memberData[i]}
          />
        );
      }
      if (i>3 && i<6) {
        members.push(
          <GigItem
            resource={memberData[i]}
            size='rectangle-half'
          />
        );
      }
      if (i>6) {
        members.push(
          <GigItem
            resource={memberData[i]}
          />
        );
      }
    }
    return members;
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="gigs-panel">
          <div className="gigs-container"> 
            <h2>Gigs</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div className="gigs-items-container">
            {this.renderGigItems()}
          </div>
        </div>
        <style scoped>
          @import url(https://fonts.googleapis.com/css?family=Montserrat:200,400);
        </style>
      </div>
    );
  }
}
