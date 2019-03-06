import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
//import styles fro your PokeCard component.
import styles from '../styles';

const PokeCard = ({name}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                        style={styles.pokeImage}/>
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard;