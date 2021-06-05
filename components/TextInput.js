import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput as Input} from 'react-native-paper'
import {theme} from '../core/theme'

const TextInput = (props) => {
    return (
    <View style={styles.container}>
      <Input
        label='Email'
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        
      />
      <Input
        label='Password'
        secureTextEntry
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        
      />
    </View>
  )};
  

export default TextInput;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.surface,
      marginVertical: 10
    }
  });

