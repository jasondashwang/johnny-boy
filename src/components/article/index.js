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

export default class Article extends React.Component {
  render() {
    return (
      <View>
        <View style={ styles.container }>
          <Text>Article Page</Text>
        </View>
      </View>
    );
  }
}

