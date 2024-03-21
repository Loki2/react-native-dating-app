import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

// Create page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
