import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

// Create page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
