import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

// components
import Heading from '../components/Heading';
import ImageItem from '../components/ImageItem';

// api services
import ApiService from '../services/api-serivce';

// const imageList = require('../common/ImageData.json');

const numColumns = 3;

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  // renderComponent
  const renderItem = ({item}) => {
    return (
      <ImageItem
        id={item.id}
        source={item?.urls?.regular}
        numColumns={numColumns}
      />
    );
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const images = await ApiService.getPhotos();
        // console.log(images);
        setImageList(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Heading title={'Image Gallery'} />
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.containerStyle}
      />
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  containerStyle: {
    alignItems: 'flex-start',
    paddingBottom: 60,
  },
});
