import React, {useState} from 'react';
import { View, Text, Image, StyleSheet,Platform,  TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import logo from '../../assets/logo.png'

import api from '../services/api';

export default function Login(){

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    async function handleIformantion(){
       const resp = await api.post('/sessions', {
            email
       })
       const { _id } = resp.data;
    }

    return <KeyboardAvoidingView enabled={Platform.OS === "ios" } behavior="padding" style={styles.container}>
        <Image source={logo}/>
        <View style={styles.form}>
            <Text style={styles.label}>Seu E-MAIL *</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu E-mail"
                placeholderTextColor="#999"
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}

            />
            <Text style={styles.label}>Tecnologias *</Text>
            <TextInput
                style={styles.input}
                placeholder="Tecnologias de Interesse"
                placeholderTextColor="#999"
                autoCorrect={false}
                autoCapitalize="words"
                value={techs}
                onChangeText={setTechs}
            />
            <TouchableOpacity onPress={handleIformantion} style={styles.button} >
                <Text style={styles.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    button: {
        height:42,
        backgroundColor: '#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 20
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color:'#444',
        height:44,
        marginBottom:20,
        borderRadius:2
    }
  });
  