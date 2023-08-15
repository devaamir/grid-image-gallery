import React, {useState, memo} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

// dimensions
const {height, width} = Dimensions.get('window');

interface HeadingProps {
  id: number;
  source: string;
  numColumns: number;
}

const ImageItem: React.FC<HeadingProps> = ({source, numColumns}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View
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
    </View>
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
