import {StyleSheet,Text,View,TextInput,Button} from 'react-native';
import React ,{useState} from 'react';

export default function AddtoDo({submitHandler}){
    const [text, setText]=useState('');
    const changeHandler= (val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo...'
                onChangeText={(val)=>changeHandler(val)}
            />
            <View style={styles.button}> 
                <Button onPress={()=> submitHandler(text)} title='add todo' color='#007AF3' font/>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    button:{
        borderRadius:5,
        fontWeight:'bold'

    }
})