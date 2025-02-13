import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Increment from '../component/increment';
import Decrement from '../component/decrement';

const Home = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>My VALUE: {count}</Text>
            <Button title="Increment +" onPress={increment} />
            <Button title="Decrement -" onPress={decrement} />
            <Link style={styles.text} href='/lab4' >Lab4</Link>
            
            
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    countText: {
        fontSize: 32,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: 'red',
        padding: 1,
        borderRadius: 5,
        margin: 40,
    },
});

export default Home;