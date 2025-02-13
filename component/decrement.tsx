import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

type DecrementProps = {value: number; setValue: (value: number) => void };

const Decrement: React.FC<DecrementProps> = ({value, setValue}) => {
    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
       <View style={styles.container}>
        <View style={styles.button}>
            <TouchableOpacity onPress={handleDecrement}>
                <Text style={styles.text}>Decrement -</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default Decrement;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'white',
    },
});