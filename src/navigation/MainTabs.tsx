import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CompetitionsScreen from '../screens/CompetitionsScreen';
import MatchesScreen from '../screens/MatchesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MainTabs = createBottomTabNavigator({ 
  screens: {
    Home: {
      screen: HomeScreen
    },
    Competitions: {
        screen: CompetitionsScreen
    },
    Matches: {
        screen: MatchesScreen
    },
    Favorites:{
        screen: FavoritesScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  },
});

export default MainTabs;