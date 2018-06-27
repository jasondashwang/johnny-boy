import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    List,
    ListItem,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
import { Header } from 'react-native-elements';
import SideMenu from 'react-native-side-menu'
import Feed from '../feed';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  }
});

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  static navigationOptions = {
    title: 'News Feed',
  };

  render() {
    // This is the options menu content
    const MenuComponent = (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.container}>
          <Text>Option 1:</Text>
          <Text>Option 2:</Text>
          <Text>Option 3:</Text>
        </View>
      </ScrollView>
      )

    return (
      <SideMenu
        menu={MenuComponent}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        >
        <Feed/>
      </SideMenu>
    );
  }
}
