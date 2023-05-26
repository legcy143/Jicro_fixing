import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = ({ text }) => (
  <View style={styles.container}>
    <View className="bg-gray-200" style={styles.line} />
    <Text className="text-gray-700 font-semibold text-md " style={styles.text}>{text}</Text>
    <View className="bg-gray-200"  style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft:30,
    paddingRight:30
  },
  line: {
    flex: 1,
    height: 1,
    // backgroundColor: 'black',
    // backgroundColor: 'transparent',
    // backgroundImage: 'linear-gradient(to right, white, gray)',
  },
  text: {
    marginHorizontal: 10,
    // color:"#1c1c1c"
  },
});

export default Separator;
