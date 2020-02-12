import React from 'react';
import {Text, StyleSheet} from 'react-native';

const UniformText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontSize: 16,
        color: 'blue'
    }

});

export default UniformText;