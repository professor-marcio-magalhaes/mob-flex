import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar/>
      <View style={styles.quadradoA}/>
      <View style={styles.quadradoB}/>
      <View style={styles.quadradoC}/>
    </SafeAreaProvider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  quadradoA: {
    backgroundColor: "green",
    height: '30%',
    width: '50%',
  },
  quadradoB: {
    backgroundColor: "blue",
    height: '30%',
    width: '50%',
  },
  quadradoC: {
    backgroundColor: "orange",
    height: '30%',
    width: '50%',
  }
});