import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyButton from './MyButton';

export default class Main extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
        this.register = this.register.bind(this);
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });
    }

    register() {

        return fetch("http://localhost:3000/")
            //.then((response) => response.json())
            .then(() => {
                console.log('response');
            })
            .catch((error) => {
                console.error(error);
            });
        //console.log(this.state)

        
    }

    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.Info}>
                    <Text style={styles.header}> Register Node App </Text>
                </View>
                <View style={styles.Form}>
                    <Text> Login: </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter login"
                        onChangeText={(text) => this.setState({ login: text })}
                    />
                    <Text> Password: </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter password"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <View style={{
                        alignItems: 'center',
                    }}>
                        <MyButton style={styles.Button} text='REGISTER' click={this.register}></MyButton>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Info: {
        flex: 1,
        backgroundColor: '#388E3C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Form: {
        flex: 2,
        backgroundColor: 'white',
        padding: 10,
    },
    header: {
        fontSize: 30,
        color: 'white',
    },
    TextInput: {
        color: 'green',
        height: 40,
    },
    Button: {

    }
});
