import { DrawerNavigator } from 'react-navigation';
import ArticleScreen from '../components/article';
import FrontPageScreen from '../components/frontPage';

const Drawer = DrawerNavigator({
  Article: {
    screen: ArticleScreen,
  },
  FrontPage: {
    screen: FrontPageScreen,
  },
}, {
  initialRouteName: 'FrontPage',
});

// Manifest of possible screens
export default Drawer;
