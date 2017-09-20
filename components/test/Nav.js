import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import find from 'lodash/find';
import { topNavigationLinks } from '../../helpers/util';
import {
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
} from '../styled/Nav'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    };
  }

  onHamburgerClick = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    const activeLink = this.props.active ? this.props.active : '';

    return (
      <Nav>
        <NavContainer>
          <Brand>
          </Brand>
          <NavMobile onClick={() => this.onHamburgerClick()}>
            <Hamburger>
              <HamburgerIcon isToggled={this.state.isToggled}></HamburgerIcon>
            </Hamburger>
          </NavMobile>
          <NavBar isVisible={this.state.isToggled}>
            <NavItems isVisible={this.state.isToggled}>
              {topNavigationLinks.map((navItem, idx) => (
                <Link prefetch key={idx} href={navItem.path}>
                  <NavItem key={idx}>
                    {navItem.title.toLowerCase() === activeLink.toLowerCase() ?
                      (
                        <ActiveItemText>
                          {navItem.title}
                        </ActiveItemText>
                      ) : (
                        <ItemText>
                          {navItem.title}
                        </ItemText>
                      )
                    }
                  </NavItem>
                </Link>
              ))}
            </NavItems>
          </NavBar>
        </NavContainer>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  active: PropTypes.string
};
