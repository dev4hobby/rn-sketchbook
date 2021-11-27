import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/loading'

const Loading = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Just a sec</Text>
        </View>
    )
}

export default Loading;