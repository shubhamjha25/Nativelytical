import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

    return (
        <View style={styles.container}>

            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}
            />

            {/* <ScrollView>
                {
                    people.map(item => {
                        return (
                            <View key={item.key}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView> */}
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
