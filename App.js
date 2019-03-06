import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import PokeList from './components/PokeList';

export default class App extends React.Component {
  render() {
    return (
      <PokeList/>
    )
  }
}