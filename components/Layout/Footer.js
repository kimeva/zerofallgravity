import React, { Component } from 'react';
import styled from 'styled-components';
import { socialMediaLinks, generateSocialMediaLink } from '../../helpers/util';

const FooterContainer = styled.div`
  position: relative;
  padding-top: 40px;
  padding-bottom: 10px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  p {
    color: #808080;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 10px;
    margin: 0 0 5px 0;

    a {
      color: #808080;
      text-decoration: none;
    }
  }
`;

const SocialMediaLinks = styled.div`
  text-align: center;
  padding: 0;
  min-height: 30px;
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-start: center;
  flex-grow: 0;
  margin-bottom: 15px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 50px;
    &:hover {
      cursor: pointer;
    }

    a {
      i {
        margin-left: 12px;
        margin-right: 12px;
        font-size: 30px;
        color: #fff;
        transition: color 0.1s ease-in;
      }
        
      .fa-facebook-official {
        &:hover {
          color: #3B5998;
        }
      }

      .fa-instagram {
        &:hover {
          color: #f77737;
        }
      }

      .fa-youtube-play {
        &:hover {
          color: #cd201f;
        }
      }
    }
  }
`;

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <SocialMediaLinks>
          {socialMediaLinks.map((socialMedia, idx) => (
            <div key={idx}>
              {generateSocialMediaLink(socialMedia)}
            </div>
          ))}
        </SocialMediaLinks>
        <p>
          &#9400; {(new Date()).getFullYear()} Zero Fall Gravity
        </p>
        <p>
          Background photo by: <a href="https://unsplash.com/@nathananderson">Nathan Anderson</a>
        </p>
      </FooterContainer>
    );
  }
}
