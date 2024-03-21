import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// Create page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
