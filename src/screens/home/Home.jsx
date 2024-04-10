import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // Core Component (View)
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Home</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentDescription}>Home</Text>
      </View>

      <View>
        <Button
          title="Click Me"
          onPress={() => console.log('fighting for future trend bro...?')}
          color="midnightblue"
          disabled
        />
      </View>

      <View>
        <Button
          title="Open Modal"
          onPress={() => setModalVisible(true)}
          color="midnightblue"
        />
      </View>

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Hello, This modal from react native</Text>
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(false)}
            color="midnightblue"
          />
        </View>
      </Modal>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Pressable onPress={() => console.log('view the image on this site')}>
            <Image
              style={styles.imageTest}
              source={{
                uri: 'https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
              }}
            />
          </Pressable>

          <Pressable onPress={() => console.log('view the text on this site')}>
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
          </Pressable>
          <Image
            style={styles.imageTest}
            source={{
              uri: 'https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            }}
          />
        </View>

        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
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
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  imageTest: {
    width: 200,
    height: 200,
  },
  scrollViewContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 60,
  },
});
