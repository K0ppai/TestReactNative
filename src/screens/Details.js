import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Details = ({ route, navigation }) => {
  const { title, description } = route.params;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
