// Pages
export { Home } from './Page/Home/Home';
export { About } from './Page/About/About';

// Non-refactored
export { Gigs } from './Gigs/Gigs';
export { GigItem } from './Gigs/GigItem/GigItem';


// Widgets
export { ImageLoader } from './Widget/ImageLoader/ImageLoader';
export { BackgroundVideo } from './Widget/BackgroundVideo/BackgroundVideo';
export { MemberItem } from './Widget/MemberItem/MemberItem';

// Layout
import AnalyticsWrapper from './Layout/AnalyticsWrapper';
import PlainPage from './Layout/Page';
export const Page = AnalyticsWrapper(PlainPage);
export { Theme } from './Layout/Theme';
export { Meta } from './Layout/Meta';
export { TopNav } from './Layout/Navigation/TopNav';
export { BottomNav } from './Layout/Navigation/BottomNav';
export { Footer } from './Layout/Footer';

// Styles
export {
  Content
} from './Styled/Layout';

export {
  Filler as HomeFiller
} from './Styled/Home'

export {
  ComingSoonPanel
} from './Styled/Widget/ComingSoon';
