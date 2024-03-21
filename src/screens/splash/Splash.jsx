import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Welcome to Splash Screen</Text>
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
