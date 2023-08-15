import React, {useState, memo} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// dimensions
const {height, width} = Dimensions.get('window');

// components
import ImageModal from './ImageModal';

interface HeadingProps {
  id: number;
  source: string;
  numColumns: number;
}

const ImageItem: React.FC<HeadingProps> = ({source, numColumns}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setOpenModal(true);
        }}
        style={[
          styles.container,
          {
            width: width / numColumns,
            height: width / 2,
          },
        ]}>
        <Image
          defaultSource={require('../assets/images/default-image.png')}
          source={
            loading || error
              ? require('../assets/images/default-image.png')
              : {uri: source}
          }
          style={loading || error ? styles.defaultImageStyle : styles.image}
          onLoadEnd={() => {
            setLoading(false);
          }}
          onError={() => {
            setError(true);
          }}
        />
      </TouchableOpacity>

      <ImageModal
        visible={openModal}
        setVisible={setOpenModal}
        source={source}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#263238',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  defaultImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#90A4AE',
  },
});

export default memo(ImageItem);
