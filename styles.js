//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#d3d3d3',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#000000',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
})

export default styles;