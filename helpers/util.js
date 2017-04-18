// const backgroundImage = {
//   full: 'https://source.unsplash.com/9o-VrJSwGuw/1920x1080',
//   thumbnail: 'https://source.unsplash.com/9o-VrJSwGuw/40x20'
// };

const zfgText = 'Zero Fall Gravity';
const retinaSuffix = '@2x';

const backgroundImage = {
  full: 'static/images/space-bg.jpg',
  thumbnail: 'static/images/space-bg-sm.jpg'
};

const backgroundVideoImage = {
  full: 'static/images/zfg/zfg-bg-video-ss.jpg',
  thumbnail: 'static/images/zfg/zfg-bg-video-ss-sm.jpg'
};

export const getImageAlt = (description, text) => `${zfgText} | ${description} | ${text}`;
export const getBoxWidthClass = (size) => `width-size-${size}`;
export const getBoxHeightClass = (size) => `height-size-${size}`;
export const getFontSizeClass = (size) => `font-size-${size}`;

export const getBackgroundImage = () => {
  return backgroundImage;
}

export const getBackgroundVideoImage = () => {
  return backgroundVideoImage;
}

export const preventRightClick = (e) => {
  e.preventDefault();
  return false;
};

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
