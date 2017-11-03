import styled from 'styled-components';

const desktopWidth1024 = '1024px';
const tabletWidth768 = '768px';
const mobileWidth425 = '425px';
const mobileWidth320 = '320px';

const Nav = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.01) 0, #000000 150%);
  top: 0;
  left: 0;
  right: 0;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    background: #000000;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
  }
`;

const Brand = styled.div`
  margin: 20px 0;
  background-image: url('/static/images/zfg/zfg-logo.png');
  background-position-y: center;
  width: 350px;
  height: 24px;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease 0s;

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

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    width: 250px;
    margin: 0 20px;
    flex-grow: 1;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-320']}px) {
    width: 210px;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const NavBar = styled.div`
  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    display: ${props => props.isVisible ? 'block' : 'none'};
  }
`;

const NavMobile = styled.div`
  display: none;
  position: relative;
  top: 0;
  right: 0;
  background: #000000;
  height: 70px;
  width: 70px;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    display: block;
  }
`;

const Hamburger = styled.a`
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
`;

const HamburgerIcon = styled.span`
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: ${props => props.isToggled ? 'transparent' : 'white'};
  position: absolute;
  display: block;
  content: '';
  transition: all 300ms ease-in-out;

  &:before {
    top: ${props => props.isToggled ? 0 : '-10px'};
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
    transform: ${props => props.isToggled ? 'rotate(45deg)' : 'none'};
  }

  &:after {
    bottom: ${props => props.isToggled ? 0 : '-10px'};
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
    transform: ${props => props.isToggled ? 'rotate(-45deg)' : 'none'};
  }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    flex-direction: column;
    opacity: ${props => props.isVisible ? 1 : 0};
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 300ms, visibility 300ms;
  }
`;

const NavItem = styled.li`
  padding: 4px 16px;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    padding: 20px;
  }
`;

const ItemText = styled.a`
  color: #c8c8c8;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.333em;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 200;
  padding-bottom: 5px;
  padding-left: 0.4em;
  transition: border-bottom-color 1s ease;
  -webkit-transition: border-bottom-color 1s ease;
  -moz-transition: border-bottom-color 1s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const ActiveItemText = ItemText.extend`
  color: white;
  border-bottom-color: #fff;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    border-bottom-color: transparent;
  }
`;

export {
  Nav,
  NavContainer,
  Brand,
  NavBar,
  NavMobile,
  NavItems,
  NavItem,
  ItemText,
  ActiveItemText,
  Hamburger,
  HamburgerIcon
}
