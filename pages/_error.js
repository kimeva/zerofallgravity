import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Theme from 'components/Layout/Theme';
import isRetina from 'is-retina';
import { ImageLoader, Meta } from 'components';
import { getBackgroundImage } from '../helpers/util';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  text-align: center;
  padding: 0 30vw;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  color: #fff;

  @media only screen and (max-width: ${props => props.theme.size['tablet-width-768']}px) {
    padding: 0 30vw;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-320']}px) {
    padding: 0 20px;
  }

  p {
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.5em;
    white-space: pre-line;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
     -ms-animation: fadein 1s; /* Internet Explorer */
      -o-animation: fadein 1s; /* Opera < 12.1 */
         animation: fadein 1s;
  
    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
    }
  
    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  
    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  
    /* Internet Explorer */
    @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  
    /* Opera < 12.1 */
    @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
      font-size: 12px;
    }
  }
`;

const ImageLogo = styled.div`
  height: 250px;
  width: 250px;
  position: relative; 
  background: ${props => props.bgStyle};
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
   -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
       animation: fadein 1s;

  @keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @media only screen and (max-width: ${props => props.theme.size['mobile-width-425']}px) {
    height: 200px;
    width: 200px;
  }
`;

const ErrorButton = styled.div`
  border: 2px solid #fff;
  padding: 10px 20px;
  background: transparent;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
   -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
       animation: fadein 1s;

  @keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  &:hover {
    cursor: pointer;
    background: #fff;

    a {
      color: #000;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default class Error extends Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    const { full, thumbnail } = getBackgroundImage(false);
    const logoSrc = isRetina ?
      '/static/images/zfg/zfg-hex-logo@2x.png' :
      '/static/images/zfg/zfg-hex-logo.png';
    const logoBgStyle = `url(${logoSrc})`;

    return (
      <Theme>
        <ErrorContainer>
          <Meta title={"Error"} />
          <ImageLoader
            fullSrc={full}
            thumbnailSrc={thumbnail}
            imgAlt={'Zero Fall Gravity | Background | Space by Nathan Anderson'}
            isCover
          />
          <ImageLogo
            bgStyle={logoBgStyle}
          />
          <p>{`There's nothing here but silence.`}</p>
          <ErrorButton>
            <Link prefetch href="/">
              <a>Back Home</a>
            </Link>
          </ErrorButton>
        </ErrorContainer>
      </Theme>
    )
  }
}
