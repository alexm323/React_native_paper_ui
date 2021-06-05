import React,{useState} from 'react'
import { StyleSheet, View} from 'react-native'
import { Button, Avatar} from 'react-native-paper'
import TextInput from '../components/TextInput'

export default function LoginScreen() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style = {styles.container}>
            <Avatar.Image size={150} source={require('../assets/sign_in.png')}/>
            <View style={styles.inputView}>
                <TextInput/>
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
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      }
})