import {createStaticNavigation} from '@react-navigation/native'
import MainTabs from './src/navigation/MainTabs';


const Navigation = createStaticNavigation(MainTabs);

function App() {
  return <Navigation/>; 
}

export default App;