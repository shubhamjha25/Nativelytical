import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

    const [name, setName] = useState('Shubham');

    const clickHandler = () => {
        setName('Elon Musk')
    }

    return (
        <View style={styles.container}>
            <Text>My name is {name}</Text>
            <Text></Text>

            <View style={styles.buttonContainer}>
                <Button title="Update State" onPress={clickHandler} />
            </View>

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
    buttonContainer: {
        marginTop: 20
    }
});
