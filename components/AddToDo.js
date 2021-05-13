import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const AddToDo = ({ submitHandler }) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New ToDo ...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add ToDo' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
});

export default AddToDo;