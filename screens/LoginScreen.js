import React,{useState} from 'react'
import { StyleSheet, View} from 'react-native'
import { TextInput, Button} from 'react-native-paper'

export default function LoginScreen() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style = {styles.container}>
            <Button icon='account'/>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                label='Email'
                value={email}
                onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                label='Password'
                value={password}
                onChangeText={password => setPassword(password)}
                />
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        
        flex: 1,
        padding: 10,
        
      }
})