import styled from 'styled-components';

const MemberContainer = styled.div`
  position: relative;
  float: left;
  height: 180px;
  width: 180px;
  padding: 10px; 

  @media (max-width: 500px) {
    height: 330px;
    width: 330px;
  }

  @media (max-width: 375px) {
    height: 230px;
    width: 230px;
  }
`;

const MemberDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 22px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2em;
    color: #ffffff;

    &::after {
      z-index: 9999;
    }
  }
`;

const MemberName = styled.span`
  font-size: 9pt;
  font-weight: 100;
  letter-spacing: 0.2em;
  transition: all 0.3s ease 0s;
  margin-bottom: 3px;

  @media (max-width: 500px) {
    font-size: 11pt;
  }

  @media (max-width: 375px) {
    font-size: 11pt;
  }
`;

const MemberRole = styled.span`
  font-weight: 400;
  font-size: 7pt;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 2px;
  transition: all 0.3s ease 0s;

  @media (max-width: 500px) {
    font-size: 9pt;
  }

  @media (max-width: 375px) {
    font-size: 9pt;
  }
`;

const MemberSocialMedia = styled.span`
  display: block;
  height: 14px;
  transition: all 0.3s ease 0s;

  @media (max-width: 500px) {
    height: 16px;
  }

  @media (max-width: 375px) {
    height: 16px;
  }

  &::before {
    content: '';
  }

  a {
    .social-media-icon {
      margin-top: 5px;
      margin-right: 8px;
      font-size: 14px;
      color: #fff;
      transition: all 0.3s ease 0s;
      height: 14px;
      content: “\00a0”;

      @media (max-width: 500px) {
        font-size: 16px;
        height: 16px;
      }

      @media (max-width: 375px) {
        font-size: 16px;
        height: 16px;
      }
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
        color: #2ebd59;
      }
    }
  }
`;

export {
  MemberContainer,
  MemberDetails,
  MemberName,
  MemberRole,
  MemberSocialMedia
};
