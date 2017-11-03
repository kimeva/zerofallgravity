import styled from 'styled-components';

// Content
const Content = styled.div`
  position: relative;
  padding-top: 61px;

  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 425px) {
    padding-top: 45px;
    padding-bottom: 45px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%);
  height: 70%;
`;

export {
  Content,
  Overlay
};
