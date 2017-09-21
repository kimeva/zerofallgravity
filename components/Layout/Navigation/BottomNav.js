import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { bottomNavigationLinks } from '../../../helpers/util';

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background: black;
  border-top: 1px solid #262626;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    display: block;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled.a`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 3px;
  color: ${props => props.isActive ? '#ffffff' : '#808080'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 11px;
  line-height: 16px;
  transition: color 0.1s ease-in;

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    padding-top: 5px;
  }

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
  
  i {
    height: 21px;
    font-size: 20px;
    line-height: 20px;
  }
`;

export class BottomNav extends Component {
  render() {
    const activeLink = this.props.active ? this.props.active : '';
    return (
      <Nav>
        <div>
          {
            bottomNavigationLinks.map((navItem, idx) => 
              <Link prefetch key={idx} href={navItem.path}>
                <NavLink isActive={navItem.title.toLowerCase() === activeLink.toLowerCase()}>
                  <i className={`fa fa-${navItem.icon} fa-fw`} aria-hidden="true"></i>
                  {navItem.title}
                </NavLink>
              </Link>
            )
          }
        </div>
      </Nav>
    );
  }
}

BottomNav.propTypes = {
  active: PropTypes.string
};
