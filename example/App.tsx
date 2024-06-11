import { StyleSheet, Text, View } from 'react-native';

import * as ExpoNativeConfiguration from 'expo-native-configuration';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoNativeConfiguration.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
