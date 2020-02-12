import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

import Box from '../page-components/Box';

const StartScreen = props => {

    return (
        <View style={styles.screen}>
            <Box style={styles.inputContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text>- {props.author}</Text>
            </Box>
            <View>
                <Button title="Refresh"  onPress={props.onClick} />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      marginVertical: 10
    },
    inputContainer: {
      width: 300,
      height: '70%',
      maxWidth: '80%',
      alignItems: 'center',
       backgroundColor: '#39ff14',
       justifyContent: 'center'

    },
    buttonContainer: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'center',
      paddingHorizontal: 10

    }
  });
export default StartScreen;






