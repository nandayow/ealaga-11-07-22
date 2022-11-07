import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../Color';

function InputProfile(props) {
  return (
  
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
 
        >
        </TextInput>
        
   
  );
}

const styles = StyleSheet.create({
    input: {
      fontSize:18,
        width: '90%',
        height: 40, 
        margin: 5, 
        paddingLeft: 20,
        borderWidth :1,
        borderColor: Colors.underline,
        borderRadius:10
    },
});
export default InputProfile