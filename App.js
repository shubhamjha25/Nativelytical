import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

    const [people, setPeople] = useState([
        { name: 'Shubham', key: '1' },
        { name: 'Elon', key: '2' },
        { name: 'Alastair', key: '3' },
        { name: 'Doge', key: '4' },
        { name: 'Malan', key: '5' },
        { name: 'Nortje', key: '6' },
        { name: 'Smith', key: '7' },
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    people.map((item) => {
                        return (
                            <View key={item.key}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
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
        backgroundColor: 'pink'
    }
});
