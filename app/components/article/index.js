import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Article extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I love you Valeria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
