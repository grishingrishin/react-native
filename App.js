import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Auth from './components/Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
}

export default App;
