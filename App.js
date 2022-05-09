// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>curso react native</Text>
      <Saludar firstname='jose' lastname={22} />
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
