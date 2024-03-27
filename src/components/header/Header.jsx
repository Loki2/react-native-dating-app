import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Surface} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../utils/Colors';

const SizeIcon = 24;

const Header = () => {
  return (
    <Surface style={styles.header}>
      <View style={styles.views}>
        {
          <TouchableOpacity>
            <Feather name="menu" size={SizeIcon} color={Colors.black} />
          </TouchableOpacity>
        }
      </View>
      <View>Center</View>
      <View>Right</View>
    </Surface>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  views: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 50,
  },
});
