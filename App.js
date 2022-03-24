import { StyleSheet, Text, View ,FlatList} from 'react-native';
import React ,{useState} from 'react';
import Header from './components/header';
import Addinput from './components/AddtoDo';
import TodoItem from './components/toDoitem';

export default function App() {
  const [todos, setTodos]= useState([
    {text: 'buy coffe', key :'1'},
    {text: 'create an app', key :'2'},
    {text: 'play on the switch', key :'3'},
  ]);
  const pressHandler=(key)=>{
    setTodos((prevTodods)=>{
      return prevTodods.filter(todo =>todo.key!= key)
    })
  }
  const submitHandler =(text)=>{
    setTodos((prevTodos)=>{
      return [
        {text :text,key : Math.random().toString() },
        ...prevTodos
        //...takes the array from the prevstate to the new array wich is returned
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style ={styles.content}>
        <Addinput submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              //<Text>{item.text}</Text>
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,
  }
});
