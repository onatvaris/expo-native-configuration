import * as ExpoNativeConfiguration from 'expo-native-configuration';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>API key: {ExpoNativeConfiguration.getApiKey()}</Text>
    </View>
  );
}
