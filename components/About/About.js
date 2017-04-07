import React, { Component } from 'react';
import Head from 'next/head';
import { Grid, Row, Col } from 'react-bootstrap';
import { MemberPic } from 'components';
import styles from './About.scss';

export class About extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Zero Fall Gravity | About</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="detail-panel">
          <div className="detail-container"> 
            <h2>About</h2>
            <p>
              Zero Fall Gravity (ZFG) was formed in 2015 by by a group of rock and metal enthusiasts keen to bring back the head-banging nostalgic hits of old school rock 'n' roll classics to the local music scene. Some notable gigs that ZFG have played for include SMU's Starry Nite and RWS’ Coliseum Jam 2015, a nation-wide band competition, where they emerged as finalists. Looking to engage the audience with their high-octane energy, ZFG is a band that strives to continually evolve and play to please.
            </p>
          </div>
          <div className="detail-members-container">
            <div className="box">
              <MemberPic
                fullSrc={"static/images/zfg/member-zejie@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-zejie-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Ze Jie Tan</span>
                <span className="member-role">Vocals</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/zejie.tan/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/tan.zejie/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="box">
              { /*<div className="pic pic-likai">
              </div>*/}
              <MemberPic
                fullSrc={"static/images/zfg/member-likai@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-likai-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Ho Li Kai</span>
                <span className="member-role">Lead Guitars</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/pursuerofwisdom/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/pursuerofwisdom/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/user/holislasher/">
                    <i className="social-media-icon fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="box">
              {/*<div className="pic pic-shawn">
              </div>*/}
              <MemberPic
                fullSrc={"static/images/zfg/member-shawn@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-shawn-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Shawn We</span>
                <span className="member-role">Rhythm Guitars</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/shawn.we/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/shawnwe/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/user/ShawnWeWicked/">
                    <i className="social-media-icon fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="box">
              {/*<div className="pic pic-kevin">
              </div>*/}
              <MemberPic
                fullSrc={"static/images/zfg/member-kevin@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-kevin-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Kevin Wijono</span>
                <span className="member-role">Keyboards</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/adrian.wijono/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/adriankevinkw/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="box">
              {/*<div className="pic pic-denise">
              </div>*/}
              <MemberPic
                fullSrc={"static/images/zfg/member-denise@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-denise-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Denise Yeow</span>
                <span className="member-role">Drums</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/deniseyeow.drummer/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/denise.yeow/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/channel/UCCieI8SLaZcRcE5kHbE8y1A">
                    <i className="social-media-icon fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="box">
              {/*<div className="pic pic-kim">
              </div>*/}
              <MemberPic
                fullSrc={"static/images/zfg/member-kim@2x.jpg"}
                thumbnailSrc={"static/images/zfg/member-kim-sm.jpg"}
              />
              <div className="member-details">
                <span className="member-name">Kim Evangelista</span>
                <span className="member-role">Bass</span>
                <span>
                  <a target="_blank" href="https://www.facebook.com/kime924/">
                    <i className="social-media-icon fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/kimchi.ll/">
                    <i className="social-media-icon fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
