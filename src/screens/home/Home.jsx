import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Home</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentDescription}>Home</Text>
      </View>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            style={styles.imageTest}
            source={{
              uri: 'https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            }}
          />
          <Text style={styles.contentDescription}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Text>
          <Image
            style={styles.imageTest}
            source={{
              uri: 'https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            }}
          />
        </View>

        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
          <ImageBackground
            source={{
              uri: 'https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            }}>
            <Text style={styles.contentDescription}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

// Create page styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'space-between',
  },
  content: {
    width: 200,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: 'blue',
  },
  contentDescription: {
    fontSize: 12,
    fontWeight: '300',
    color: 'white',
  },
  imageTest: {
    width: 200,
    height: 200,
  },
});
