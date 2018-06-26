import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text>Feed Page</Text>
      </View>
    );
  }
}

