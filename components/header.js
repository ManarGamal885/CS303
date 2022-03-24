import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function header (){
    return(
        <View style= {styles.header}>
            <Text style={styles.title}>My Todods</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
       backgroundColor:'#007AF3'
    },
    title:{
        textAlign:'center',
        color:'#fff',  
        fontSize: 20,
        fontWeight:'bold'
    },
    });