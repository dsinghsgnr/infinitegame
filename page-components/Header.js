import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UniformText from './UniformText';

const Header = props => {
    return (
        <View style = {styles.header}>
            <UniformText style={styles.headerTitle}>{props.title}</UniformText>
            <UniformText >{"Words of Wisdom"}</UniformText>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: 90,
        paddingTop: 25,
        backgroundColor: '#ffa500',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 25,
        color: 'black'
    }
})

export default Header;