import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { arrayOfObjects } from '../data/data';

const Home = ({ navigation }) => {
  const pressHandler = (item) => {
    navigation.navigate('Details', item);
  };

  return (
    <FlatList
      data={arrayOfObjects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.container} onPress={() => pressHandler(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
});
