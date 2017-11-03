import styled from 'styled-components';

const AboutSection = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
      -ms-animation: fadein 0.5s; /* Internet Explorer */
      -o-animation: fadein 0.5s; /* Opera < 12.1 */
          animation: fadein 0.5s;

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

  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 250px;
  }
`;

const AboutDetails = styled.div`
  padding: 0 10px;
  position: relative;
  h2, p {
    color: #c8c8c8;
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    font-weight: 200;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  p {
    font-size: 10pt;
    font-weight: 200;
    line-height: 2em;
  }
`;

const AboutMember = styled.div`
  position: relative;
  padding: 15px 0;
`;

export {
  AboutSection,
  AboutDetails,
  AboutMember
};
