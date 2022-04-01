import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Inbox: React.FC = () => {
  useEffect(() => {
    animation.current.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }, []);

  const animation = useRef<any>(null);

  const resetAnimation = () => {
    animation.current.reset();
    animation.current.play();
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        source={require('./finger-success.lottie.json')}
        // source={require('./bot.lottie.json')}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee'
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="Restart Animation" onPress={resetAnimation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
});

export default Inbox;
