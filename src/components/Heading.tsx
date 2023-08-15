import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    // alignItems: 'center',
    marginBottom: 16,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
  },
});

export default Heading;
