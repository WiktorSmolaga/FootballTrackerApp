import { Text, View } from 'react-native';
import type {StaticScreenProps} from '@react-navigation/native';

type MatchDetailsProps = StaticScreenProps<{
  matchId: number;
}>;

function MatchDetailsScreen({route}:MatchDetailsProps){
    return(
        <View 
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
                }}>
            <Text>Match Details Screen {route.params.matchId}</Text>
        </View>
    )
};

export default MatchDetailsScreen;