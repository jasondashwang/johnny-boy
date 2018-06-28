import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// The feed item itself, will eventually navigate over to a new page (article component) to render entire thing
function ArticleCard(props) {
  const { item } = props;

  return (
    <Text>{item.key}</Text>
  );
}


export default class Feed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // will call api to retrieve new articles and setState to it
  }

  render() {
    const { articles } = this.state;
    const { filter } = this.props; // filter prop will be passed down from parent

    // somehow also add a pull to refresh on flatlist
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <ArticleCard item={item} />}
        />
      </View>
    );
  }
}

