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
  static navigationOptions = {
    drawerLabel: 'Front Page',
  };

  render() {
    const { openDrawer } = this.props.navigation;

    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: openDrawer }}
          centerComponent={{ text: 'Front Page', style: { color: '#fff' } }}
        />
        <View style={ styles.container }>
          <Text>Front Page</Text>
        </View>
      </View>
    );
  }
}

