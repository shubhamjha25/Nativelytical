import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

    const [people, setPeople] = useState([
        { name: 'Shubham', id: '1' },
        { name: 'Elon', id: '2' },
        { name: 'Alastair', id: '3' },
        { name: 'Doge', id: '4' },
        { name: 'Malan', id: '5' },
        { name: 'Nortje', id: '6' },
        { name: 'Smith', id: '7' },
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id)
        })
    }

    return (
        <View style={styles.container}>

            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item: {
        marginTop: 24,
        padding: 30,
        fontSize: 24,
        backgroundColor: 'pink',
        marginHorizontal: 10,
        marginTop: 24
    }
});
