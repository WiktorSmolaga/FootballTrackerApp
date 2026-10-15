import {View, Text,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function MatchesScreen() {
    const navigation = useNavigation();
    return (
        <View
            style={{
                 flex: 1,
                 alignItems: 'center',
                 justifyContent: 'center'
                 }}>
            <Text>Matches Screen</Text>
            <Button title='Open Match Details' onPress={() => navigation.navigate('MatchDetails',{matchId:123})}/>        
        </View>
    )
};

export default MatchesScreen;