import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import { HeadComponent, Navbar, Footer, ImageLoader } from 'components';
import { getBackgroundImage, getBackgroundVideoImage } from '../../helpers/util';
import styles from './Layout.scss';

export class Layout extends Component {
  renderBgImage = (isIndexPage) => {
    if (isIndexPage) {
      const { full, thumbnail } = getBackgroundVideoImage();
      return (
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
          imgAlt="Zero Fall Gravity | Video Background | Starry Nite March 2017"
          isCover
        />
      );
    } else {
      const { full, thumbnail } = getBackgroundImage();
      return (
        <ImageLoader
          fullSrc={full}
          thumbnailSrc={thumbnail}
          imgAlt="Zero Fall Gravity | Background | Space by Nathan Anderson"
          isCover
        />
      );
    }
  }

  render() {
    const title = this.props.title ? `Zero Fall Gravity | ${this.props.title}` : 'Zero Fall Gravity';
    const isIndexPage = this.props.isIndexPage ? this.props.isIndexPage : false;
    const bgImage = this.renderBgImage(isIndexPage);

    return (
      <div>
        <HeadComponent />
        <Head>
          <title>{title}</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {bgImage}
        <Navbar
          active={this.props.title}
        />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isIndexPage: PropTypes.bool
};
