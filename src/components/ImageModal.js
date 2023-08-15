import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

// dimensions
const {height, width} = Dimensions.get('window');

// packages
import Modal from 'react-native-modal';

const ImageModal = ({source, visible, setVisible}) => {
  return (
    <Modal
      onBackButtonPress={() => {
        setVisible(false);
      }}
      onBackdropPress={() => {
        setVisible(false);
      }}
      isVisible={visible}
      backdropOpacity={0.5}
      deviceHeight={height}
      style={styles.modalContainer}
      useNativeDriver={false}>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
          }}
          style={styles.buttonStyle}>
          <Text style={{color: '#fff'}}>Close</Text>
        </TouchableOpacity>
        <Image source={{uri: source}} style={styles.image} />
      </View>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    screenBackgroundColor: 'transparent',
    modalPresentationStyle: 'overCurrentContext',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    width: '80%',
    height: '58%',
    backgroundColor: '#78909C',
  },
  buttonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    zIndex: 1,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
