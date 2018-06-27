import { StackNavigator } from 'react-navigation';
import ArticleScreen from '../components/article';
import FeedScreen from '../components/feed';
import SideBarScreen from '../components/side-bar';

const Navigator = StackNavigator({
  SideBar: {
    screen: SideBarScreen,
  },
}, {
  initialRouteName: 'SideBar',
});

// Manifest of possible screens
export default Navigator;
