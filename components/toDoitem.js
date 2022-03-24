import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React  from 'react';

/*we insted  of using export default function TodoItem (props){
    props.item;
} 
we ed the following:
*/
export default function toDoitem ({item, pressHandler}){
    return(
        <TouchableOpacity onPress ={()=> pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },
});