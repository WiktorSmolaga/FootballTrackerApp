import { createNativeStackNavigator,createNativeStackScreen}from '@react-navigation/native-stack';
import MainTabs from "./MainTabs";
import MatchDetailsScreen from "../screens/MatchDetailsScreen";
import TeamDetailsScreen from "../screens/TeamDetailsScreen";
import CompetitionDetailsScreen from "../screens/CompetitionDetailsScreen";


const RootStack = createNativeStackNavigator({
  screens: {
    MainTabs: createNativeStackScreen({
      screen: MainTabs,
      options:{
        headerShown: false,
      }
    }),
    MatchDetails: createNativeStackScreen({
      screen: MatchDetailsScreen,
    }),
    TeamDetails: createNativeStackScreen({
      screen:TeamDetailsScreen,
    }),
    CompetitionDetails: createNativeStackScreen({
        screen: CompetitionDetailsScreen,
    })
  },
});

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}

export default RootStack;