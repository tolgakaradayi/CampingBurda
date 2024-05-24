import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import BottomNavigator from './src/navigators/BottomNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
        <BottomNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});