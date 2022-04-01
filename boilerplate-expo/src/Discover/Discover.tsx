import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import 'react-native-gesture-handler';

const Discover: React.FC = () => {
  const video = useRef(null);

  return (
    <View style={styles.container}>
      {/* <View style={styles.auth}></View> */}
      <Video
        ref={video}
        style={styles.video}
        source={require('./video.mp4')}
        posterSource={require('./poster.jpeg')}
        resizeMode={Video.RESIZE_MODE_COVER}
        isLooping
        shouldPlay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  auth: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 200,
    marginHorizontal: 30,
    zIndex: 10
  }
});

export default Discover;
