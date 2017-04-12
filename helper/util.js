// const backgroundImage = {
//   full: 'https://source.unsplash.com/9o-VrJSwGuw/1920x1080',
//   thumbnail: 'https://source.unsplash.com/9o-VrJSwGuw/40x20'
// };

const backgroundImage = {
  full: 'static/images/space-bg.jpg',
  thumbnail: 'static/images/space-bg-sm.jpg'
};

const backgroundVideoImage = {
  full: 'static/images/zfg/zfg-bg-video-ss.jpg',
  thumbnail: 'static/images/zfg/zfg-bg-video-ss-sm.jpg'
};

export const getBackgroundImage = () => {
  return backgroundImage;
}

export const getBackgroundVideoImage = () => {
  return backgroundVideoImage;
}
