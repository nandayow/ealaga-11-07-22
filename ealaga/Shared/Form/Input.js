import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../Color';

const Input = (props) => {
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
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        margin: 2, 
        padding: 5,
        borderBottomWidth :2,
        borderColor: Colors.underline
    },
});

export default Input;