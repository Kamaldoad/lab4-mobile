import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

type IncrementProps = {value: number; setValue: (value: number) => void };

const Increment: React.FC<IncrementProps> = ({value, setValue}) => {
    const handleIncrement = () => {
        setValue(value - 1);
    };

    return (
       <View style={styles.container}>
        <View style={styles.button}>
            <TouchableOpacity onPress={handleIncrement}>
                <Text style={styles.text}>Increment +</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default Increment;
 
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