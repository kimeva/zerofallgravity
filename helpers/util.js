import find from 'lodash/find';

// const backgroundImage = {
//   full: 'https://source.unsplash.com/9o-VrJSwGuw/1920x1080',
//   thumbnail: 'https://source.unsplash.com/9o-VrJSwGuw/40x20'
// };

// const
const zfg = 'Zero Fall Gravity';
const retinaSuffix = '@2x';

// images
const backgroundImage = {
  full: '/static/images/space-bg.jpg',
  thumbnail: '/static/images/space-bg-sm.jpg'
};

const backgroundVideoImage = {
  full: '/static/images/zfg/zfg-bg-video-ss.jpg',
  thumbnail: '/static/images/zfg/zfg-bg-video-ss-sm.jpg'
};

export const getBackgroundImage = (isIndexPage) => isIndexPage ? backgroundVideoImage : backgroundImage;

export const getImageSrc = (isRetina, imgSrc) => {
  if (isRetina) {
    if (!imgSrc.includes(retinaSuffix)) {
      const lastIndex = imgSrc.lastIndexOf('.');
      return `${imgSrc.substr(0, lastIndex)}@2x${imgSrc.substr(lastIndex)}`;
    }
  } else {
    if (imgSrc.includes(retinaSuffix)) {
      return imgSrc.replace(retinaSuffix, '');
    }
  }
  return imgSrc;
};

export const getImageAlt = (description, text) => `${zfg} | ${description} | ${text}`;
export const getBoxWidthClass = (size) => `width-size-${size}`;
export const getBoxHeightClass = (size) => `height-size-${size}`;
export const getFontSizeClass = (size) => `font-size-${size}`;

// navigation links
export const navigationLinks = [
  { title: 'Home', path: '/', icon: 'home' },
  { title: 'About', path: '/about', icon: 'user' },
  { title: 'Gigs', path: '/coming-soon', icon: 'music' },
  { title: 'Contact', path: 'mailto:zerofallgravity@gmail.com' }
];

export const topNavigationLinks = navigationLinks.slice(1);
export const bottomNavigationLinks = navigationLinks.slice(0, 3);
export const getNavigationLink = (navigationLink) => find(navigationLinks, ['title', navigationLink]);

// socialMediaLinks
export const socialMediaLinks = [
  { platform: 'Facebook', url: 'https://www.facebook.com/zerofallgravity/', icon: 'facebook-official' },
  { platform: 'Instagram', url: 'https://www.instagram.com/zerofallgravity/', icon: 'instagram' },
  { platform: 'YouTube', url: 'https://www.youtube.com/channel/UC3aZoRX6p_L7zUzGBbkLbFg/', icon: 'youtube-play' }
];

export const getSocialMediaLink = (socialMedia) => find(socialMediaLinks, ['platform', socialMedia]);

export const generateSocialMediaLink = (socialMediaLink) => (
  <a target="_blank" href={socialMediaLink.url}>
    <i className={`fa fa-${socialMediaLink.icon} fa-fw`} aria-hidden="true"></i>
  </a>
);

// misc
export const preventRightClick = (e) => {
  e.preventDefault();
  return false;
};
