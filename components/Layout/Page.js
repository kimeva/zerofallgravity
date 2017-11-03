import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from './Theme';
import { ImageLoader, Content, Meta, TopNav, BottomNav, Footer, Overlay } from 'components';
import { getBackgroundImage } from '../../helpers/util';

class Page extends Component {
  generatePageBgAltText = (isIndexPage) => isIndexPage ?
    'Zero Fall Gravity | Video Background | Starry Nite March 2017' :
    'Zero Fall Gravity | Background | Space by Nathan Anderson';

  renderBgImage = (isIndexPage) => {
    const { full, thumbnail } = getBackgroundImage(isIndexPage);
    const altText = this.generatePageBgAltText(isIndexPage);

    return (
      <ImageLoader
        fullSrc={full}
        thumbnailSrc={thumbnail}
        imgAlt={altText}
        isCover
      />
    );
  }

  render() {
    const title = this.props.title ? `${this.props.title} | Zero Fall Gravity` : 'Zero Fall Gravity';
    const isIndexPage = this.props.isIndexPage ? this.props.isIndexPage : false;

    return (
      <Theme>
        <div>
          <Overlay />
          <Meta title={title} />
          <TopNav active={this.props.title} isIndexPage={isIndexPage} />
          {this.renderBgImage(isIndexPage)}
          <Content>
            {this.props.children}
          </Content>
          <BottomNav active={this.props.title}/>
          <Footer />
        </div>
      </Theme>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isIndexPage: PropTypes.bool
};

export default Page;
