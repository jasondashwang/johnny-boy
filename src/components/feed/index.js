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
    }
  }

  componentDidMount() {

  }

  render() {
    const { articles } = this.state;

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

