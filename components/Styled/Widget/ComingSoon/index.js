import styled from 'styled-components';

const ComingSoonPanel = styled.div`
  text-align: center;
  height: calc( 100vh - 225px );

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

  p {
    color: #a8a8a8;
    font-family: 'Cutive Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
    padding: 20px 0 0 0;
    margin: 0;
  }
`;

export {
  ComingSoonPanel
}