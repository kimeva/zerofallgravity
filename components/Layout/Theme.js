import { ThemeProvider } from 'styled-components';

const theme = {
  "zfg-black": '#000000',
  "zfg-white": '#FFFFFF'
};

// screen sizes
theme.size = {
  "desktop-width-1024": 1024,
  "tablet-width-768": 768,
  "tablet-width-600": 600,
  "mobile-width-425": 425,
  "mobile-width-320": 320
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
