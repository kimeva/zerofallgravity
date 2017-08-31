import React, { Component } from 'react';
import { ImageLoader, GigItem } from 'components';
import styles from './Gigs.scss';

export class Gigs extends Component {
  renderGigItems = () => {
    // read gig data
    const gigData = require('./data/gigs.json');
    
    // map gig details into grid
    // const gigs = gigData.map((eachGig) => {
    //   return (
    //     <GigItem resource={eachGig} />
    //   );
    // });
    
    const gigs = [];
    for (let i=0; i<gigData.length; i++) {
      if (i==0) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
            size='rectangle-lg-tall'
          />
        );
      } else {
        gigs.push(
          <GigItem
            resource={gigData[i]}
            size='rectangle-half'
          />
        );
      }
      /*if (i==0) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
            size='rectangle-lg-tall'
          />
        );
      }
      if (i==1) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
            size='square-md'
          />
        );
      }
      if (i>1 && i<4) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
          />
        );
      }
      if (i>3 && i<6) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
            size='rectangle-half'
          />
        );
      }
      if (i>6) {
        gigs.push(
          <GigItem
            resource={gigData[i]}
          />
        );
      }*/
    }
    return gigs;
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="gigs-panel">
          <div className="gigs-container"> 
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
