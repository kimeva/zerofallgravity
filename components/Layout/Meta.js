import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import FontFaceObserver from 'fontfaceobserver';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export class Meta extends Component {
  componentDidMount() {
    this.loadFonts();
  }

  loadFonts = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Cutive|Montserrat:100,200,400';
    link.rel = 'stylesheet';
  
    document.head.appendChild(link);
  
    const cutive = new FontFaceObserver('Cutive');
    const montserrat = new FontFaceObserver('Montserrat');
  
    cutive.load().then(() => {
      document.documentElement.classList.add('cutive')
    });

    montserrat.load().then(() => {
      document.documentElement.classList.add('montserrat')
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width,minimum-scale=1,initial-scale=1'
          />
          <meta httpEquiv='X-UA-Compatible'/>
          <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon.png" sizes="16x16"/>
          <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon@2x.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/static/images/zfg/zfg-favicon@3x.png" sizes="48x48"/>
          <link rel="rel" as="style" href="/static/styles/font-awesome/css/font-awesome.min.css" onload="this.rel='stylesheet'"/>
        </Head>
        <style jsx global>{`
          body { 
            background: #000000;
          }
    
          #nprogress {
            pointer-events: none;
          }
    
          @keyframes barprogress{
            0% {
              background-position:0% 0
            }
            to{
              background-position:125% 0
            }
          }
    
          #nprogress .bar {
            background: #F1F1F1 linear-gradient(to right, #F1F1F1, #E8E8E8, #F5F5F5, #BBBBBB, #808080);
            background-size: 500%;
    
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
    
            width: 100%;
            height: 4px;
    
            animation: 2s linear infinite barprogress, .3s fadein;
          }
        `}</style>
      </div>
    );
  }
}

Meta.propTypes = {
  title: PropTypes.string
};
