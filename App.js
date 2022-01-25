import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView} from 'react-native';

export default function App() {
  const [user, setUser]= useState ('');
  const [elementoAlma, setElementoAlma ]= useState ([]);

  const [datoEntrada, setDato]= useState('');
  const [datoAlmacenado, setDatoAlma]= useState([]);
  
  function entradaRegistroUsuario (userInput){
    setUser(userInput);

  }

  const addUser = () => {
    setElementoAlma([...elementoAlma, user]);

  };

  function loginUser (userInput){
    setUser(userInput);

  }


  const registro = () => {
    setDatoAlma([...datoAlmacenado, datoEntrada]);
  }

  return (
     
    <ScrollView> 
    <View style= {styles.screen}>
        <View style = {styles.items}>
          <TextInput placeholder='login' 
            style= {styles.text} 
            onChangeText={loginUser}
            value= {datoEntrada}
            />

            <Button title= 'Registro' onPress={registro} />

              
        </View>

        <View style = {styles.items}>
          <TextInput placeholder='Datos de sesión' 
            style= {styles.text} 
            onChangeText={entradaRegistroUsuario}
            value= {user}
            />

            <Button title= 'ADD' onPress={addUser} />

                
        </View>

        <ScrollView>
          {elementoAlma.map((element)=> 
          <View key= {element} style= {styles.lista}>
              <Text>{element}</Text>
          </View>
              )}
        </ScrollView>

    </View>
    </ScrollView>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  screen: {
   padding: 50
 },
  items: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
 },
  text  : {
  width: 200, borderColor:'black', borderWidth: 1, padding: 10
 },
  lista: {
   padding: 10,
   margin: 10,
   backgroundColor:'#b0c4de',
   borderColor: 'black',
   borderWidth: 1
 }
  
});
