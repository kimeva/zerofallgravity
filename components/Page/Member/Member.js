import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageLoader }  from 'components';
import { memberService } from 'services/zfg';

const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BioSection = styled.div`
  min-height: 70vh;
  width: 50%;
  background: #E8E8E8;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
    width: 100%;
    order: 2;
  }
`;

const BioDetails = styled.div`
  padding: 30px 50px;
  color: #262626;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
    padding: 20px;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;

    @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px){
      font-size: 18px;
    }

    @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
      display: none;
    }
  }
`;

const BioName = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
    flex-direction: row;
  }

  h1 {
    font-size: 5vw;
    letter-spacing: 0px;
    margin: 0;
    text-transform: uppercase;

    @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px){
      font-size: 4.5vw;
    }

    @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px){
      font-size: 4vw;
    }

    @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
      display: none;
    }
  }
`;

const Cover = styled.div`
  position: relative;
  width: 50%;
  background: ${props => props.bgStyle};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
    order: 1;
    width: 100%;
    height: 66vw;
  }
`;

const CoverDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 20px 20px 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0, #000000 100%);

  @media only screen and (min-width: ${props => props.theme.size['mobile-width-425'] + 1}px){
    display: none;
  }

  div {
    h1 {
      font-size: 8vw;
      letter-spacing: 0;
      text-transform: uppercase;
      margin: 0;
    }
  
    h2 {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 2px;
      margin: 0;
    }
  }
`;


const Divider = styled.div`
  height: 3px;
  width: 150px;
  background: #795580;
  margin: 40px 0;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px){
    width: 100px;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px){
    display: none;
  }
`;

const BioDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2em;
`;

const BioSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  div {
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }

    a {
      i {
        font-size: 20px;
        transition: color 0.25s ease-in;
        color: #808080;
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

      .fa-spotify {
        &:hover {
          color: #1db954;
        }
      }
    }
  }
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const Content = styled.p`
  font-size: 13px;
  font-weight: 200;
  margin: 0 0 20px 0;
`;

const GalleryItem = styled.div`
  width: 50%;
  height: 33vw;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px){
    width: 100%;
    height: 66vw;
  }
`;

const GalleryPicture = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bgStyle};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export class Member extends Component {
  renderSocialMediaIcon = (platform) => {
    let socialMediumClassName = null;
    switch (platform.type) {
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
      <a target="_blank" href={platform.url}>
        <i className={`fa fa-${socialMediumClassName} fa-fw`} aria-hidden="true"></i>
      </a>
    );
    return socialMediaIcons;
  }

  render() {
    const { name, role, images, details, socialMedia } = this.props.member;
    return (
      <ProfileContainer>
        <ProfileRow>
          <BioSection>
            <BioDetails>
              <BioName>
                <h1>{name.first}</h1>
                <h1>{name.last}</h1>
              </BioName>
              <h2>{role}</h2>
              <Divider />
              <BioDescription>
                <Label>Bio</Label>
                <Content>{details.bio}</Content>
                <Label>Favorite bands</Label>
                <Content>{details.bands.join(', ')}</Content>
                <Label>Influences</Label>
                <Content>{details.influences.join(', ')}</Content>
                <Label>Favorite piece of gear</Label>
                <Content>{details.gear}</Content>
                <BioSocialMedia>
                {socialMedia.map((platform, idx) => (
                  <div key={idx}>
                    {this.renderSocialMediaIcon(platform)}
                  </div>
                ))}
                </BioSocialMedia>
              </BioDescription>
            </BioDetails>
          </BioSection>
          <Cover>
            <ImageLoader
              fullSrc={images.cover.fullSrc}
              thumbnailSrc={images.cover.thumbnailSrc}
              imgAlt={`${name.full} - Cover`}
            />
            <CoverDetails>
              <div>
                <h1>{name.full}</h1>
                <h2>{role}</h2>
              </div>
            </CoverDetails>
          </Cover>
        </ProfileRow>
        <ProfileRow>
          {images.gallery.map((img, idx) => (
            <GalleryItem key={idx}>
              <ImageLoader
                fullSrc={img.fullSrc}
                thumbnailSrc={img.thumbnailSrc}
                imgAlt={`${name.full} - ${idx}`}
              />
            </GalleryItem>
          ))}
        </ProfileRow>
      </ProfileContainer>
    );
  }
}

Member.propTypes = {
  member: PropTypes.object.isRequired
};
