import {createStaticNavigation} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';


const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation/>; 
}

export default App;