import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import find from 'lodash/find';
import { topNavigationLinks, socialMediaLinks, generateSocialMediaLink } from '../../../helpers/util';

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  background: ${props => props.isIndexPage ?
    'linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.3) 67%,rgba(0,0,0,0) 100%)' :
    '#000000'
  };
  border-bottom: ${props => props.isIndexPage ? '1px transparent #262626' : '1px solid #262626'};
  z-index: 1010;

  @media only screen and (min-width: ${props => props.theme.size['tablet-width-768'] + 1}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  margin-bottom: 10px;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    display: none;
  }
`;

const NavLink = styled.li`
  padding: 0 10px;
  color: white;

  a {
    color: ${props => props.isActive ? '#ffffff' : '#c8c8c8'};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.333em;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 200;
    transition: color 0.1s ease-in;
    
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

const SocialMediaLinks = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  list-style: none;
  opacity: 0;
  max-height: 0;
  top: 0;
  z-index: 1000;
  transition:
    ${props => props.isToggled ? 'max-height 0.2s ease-in' : 'max-height 0.2s ease-out'},
    ${props => props.isToggled ? 'opacity 0.2s ease-in' : 'opacity 0.2s ease-out'},
    ${props => props.isToggled ? 'top 0.2s ease-in' : 'top 0.2s ease-out'};

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px) {
    top: ${props => props.isToggled ? '45px' : 0};
    max-height: ${props => props.isToggled ? '150px' : 0};
    opacity: ${props => props.isToggled ? 1 : 0}
  }

  li {
    width: 50px;
    height: 50px;
    background: #465775;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.1s ease-in;

    @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
      height: 45px;
    }

    &:hover {
      cursor: pointer;
      background: #324059;
    }

    a {
      i {
        color: white;
      }
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftButtons = styled.div`
  position: relative;
`;

const LeftTabletButtons = styled.div`
  display: none;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px) {
    display: none;
  }

  div {
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
      text-align: center;
      color: #ffffff;
      border-right: 1px solid #BBBBBB;

      i {
        font-size: 18px;
      }
    }
  }
`;

const LeftMobileButtons = styled.div`
  display: none;
  transition: background 0.2s ease-out;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px) {
    width: 50px;
    height: 50px;
    display: block;
    background: ${props => props.isToggled ? '#324059' : 'transparent' };
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    height: 45px;
  }
`;

const Button = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;

    .fa-facebook-official {
      color: #3B5998;
    }

    .fa-instagram {
      color: #f77737;
    }

    .fa-youtube-play {
      color: #cd201f;
    }
  }

  &:last-child {
    a {
      border-right: none;
    }
  }

  a {
    width: 100%;
    text-align: center;
    color: #ffffff;
    border-right: 1px solid #BBBBBB;

    i {
      font-size: 18px;
      transition: color 0.1s ease-in;
    }
  }
`;

const LeftButton = styled.a`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    height: 45px;
  }
`;

const RightButtons = styled.div`
  display: none;
  transition: background 0.2s ease-out;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    width: 50px;
    height: 50px;
    padding-left: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-600']}px) {
    padding-left: 0;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    height: 45px;
  }

  &:hover {
    cursor: pointer;
  }

  a {
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    align-self: flex-end;
    color: #ffffff;
    border-left: 1px transparent #262626;

    @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
      height: 45px;
    }
    
    i {
      font-size: 18px;
      transition: color 0.1s ease-in;
    }

    &:hover {
      i {
        color: #8C9ECE;
      }
    }
  }
`;

const Brand = styled.div`
  background-image: url('/static/images/zfg/zfg-logo.png');
  background-position-y: center;
  width: 250px;
  height: 18px;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10px;
  margin-bottom: 5px;

  @media 
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 2dppx) {
    background-image: url('/static/images/zfg/zfg-logo@2x.png');
  }

  @media 
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (   min--moz-device-pixel-ratio: 3),
  only screen and (     -o-min-device-pixel-ratio: 3/1),
  only screen and (        min-device-pixel-ratio: 3),
  only screen and (                min-resolution: 3dppx) {
    background-image: url('/static/images/zfg/zfg-logo@3x.png');
  }

  @media only screen and (min-width: ${props => props.theme.size['tablet-width-768']+1}px) {
    height: 18px;
  }

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    width: 250px;
  }

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    width: 230px;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    width: 200px;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-320']}px) {
    width: 180px;
  }

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    };
  }

  handleMoreClick = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    const activeLink = this.props.active ? this.props.active : '';
    return (
      <div>
        <Nav isIndexPage={this.props.isIndexPage}>
          <NavContainer>
            <LeftTabletButtons>
              {socialMediaLinks.map((socialMediaLink, idx) => (
                <Button key={idx}>
                  {generateSocialMediaLink(socialMediaLink)}
                </Button>
              ))}
            </LeftTabletButtons>
            <LeftMobileButtons isToggled={this.state.isToggled}>
              <Button onClick={() => this.handleMoreClick()} isToggled={this.state.isToggled}>
                <a>
                  <i className="fa fa-ellipsis-h fa-fw" aria-hidden="true"></i>
                </a>
              </Button>
            </LeftMobileButtons>
            <Link prefetch href="/">
              <a><Brand/></a>
            </Link>
            <RightButtons>
              <a href="mailto:zerofallgravity@gmail.com">
                <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
              </a>
            </RightButtons>
          </NavContainer>
          <NavLinks>
            {topNavigationLinks.map((navItem, idx) => 
              <Link prefetch key={idx} href={navItem.path}>
                <NavLink isActive={navItem.title.toLowerCase() === activeLink.toLowerCase()}>
                  <a href={navItem.title.toLowerCase() === 'contact' ? navItem.path : '#' }>{navItem.title}</a>
                </NavLink>
              </Link>
            )}
          </NavLinks>
        </Nav>
        <SocialMediaLinks isToggled={this.state.isToggled}>
          {socialMediaLinks.map((socialMediaLink, idx) => (
            <li key={idx}>
              {generateSocialMediaLink(socialMediaLink)}
            </li>
          ))}
        </SocialMediaLinks>
      </div>
    );
  }
}

TopNav.propTypes = {
  active: PropTypes.string,
  isIndexPage: PropTypes.bool
};
