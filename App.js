import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

    const [name, setName] = useState('Shubham');
    const [age, setAge] = useState(20);

    const clickHandler = () => {
        setName('Elon Musk')
    }

    return (
        <View style={styles.container}>
            
            <Text>Enter Name : </Text>
            <TextInput 
                style={styles.input} 
                placeholder="e.g. John Doe" 
                onChangeText={(val) => setName(val)} />

            <Text>Enter Age : </Text>
            <TextInput 
                style={styles.input} 
                placeholder="e.g. 30"
                keyboardType='numeric' 
                onChangeText={(val) => setAge(val)} /> 

            <Text>Name: {name}, Age: {age}</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});
