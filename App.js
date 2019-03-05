import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import ajax from './service/FetchData';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: []
    };
  }

  async componentDidMount() {
    try {
      //Assign the promise unresolved first then get the data using the json method. 
      const movies = await ajax.getMoviesFromApi()
      this.setState({ isLoading: false, movies: movies });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
