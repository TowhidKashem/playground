import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraModal: React.FC<
  Readonly<{
    showModal: boolean;
    setShowModal: (visible: boolean) => void;
  }>
> = ({ showModal, setShowModal }) => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    requestPermissions();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.text}>Close Modal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});

export default CameraModal;
