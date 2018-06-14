import { createStackNavigator } from 'react-navigation';
import ArticleScreen from '../components/article';

// Manifest of possible screens
export default createStackNavigator({
  Article: { screen: ArticleScreen },
}, {
  initialRouteName: 'Article',
});
