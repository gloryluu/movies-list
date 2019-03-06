import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ajax from '../service/FetchData';
import PokeCard from './PokeCard'

export default class PokeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            pokeList: [],
         };
      }

    async componentDidMount() {
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokeList = await ajax.getPokemonsFromApi();
            this.setState({ loading: false, pokeList: pokeList });
        } catch (err) {
            console.log("Error fetching data-----------", err);
        }
    }

    renderItem(data) {
        return <PokeCard {...data.item} />
    }

    render() {
        //Destruct pokeList and Loading from state.
        const { loading, pokeList } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if (!loading) {
            return <FlatList
                data={pokeList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.name}
            />
        } else {
            return <ActivityIndicator />
        }
    }
}