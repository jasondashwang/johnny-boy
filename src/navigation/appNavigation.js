import { StackNavigator } from 'react-navigation';
import ArticleScreen from '../components/article';
import FeedScreen from '../components/feed';

const Navigator = StackNavigator({
  Feed: {
    screen: FeedScreen,
  },
}, {
  initialRouteName: 'Feed',
});

// Manifest of possible screens
export default Navigator;
