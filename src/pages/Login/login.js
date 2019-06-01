import React, { Component } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, StatusBar, TextInput, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} 
                    source={require('../../assets/logo-lh.png')} />
        </View>
       <View style={styles.formContainer}>
            <View style={styles.container2}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           placeholder='Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>
              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Overview')}>LOGIN</Text>
                </TouchableOpacity> 
                <View style = {styles.site}>
                    <Text style = {styles.site} onPress={() => this.props.navigation.navigate('SiteInfo')}>lh.com.br 2019®</Text>
                </View>
            </View>
       </View>
    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#364e68',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#000",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    container2: {
        padding: 20
       },
       input:{
           height: 40,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 10,
           color: '#d7eaea',
       },
       buttonContainer:{
           backgroundColor: '#f06f32',
           paddingVertical: 15,
       },
       buttonText:{
           color: '#FFF7E5',
           textAlign: 'center',
           fontWeight: '700'
       }, 
       loginButton:{
         backgroundColor:  '#a96851',
          color: '#a96851'
       },
       site: {
           paddingTop: 10,
           fontSize: 11,
           color: '#69779b',
           justifyContent: 'center',
           alignItems: 'center',
       }
});