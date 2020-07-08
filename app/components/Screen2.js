import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Screen2 extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log(this.props.navigation.state.params.a)
        console.log(this.props.navigation.state.params.b)
    }

    render() {
        return (
            <Button
                title="go to screen1"
                onPress={() => this.props.navigation.navigate("s1")}
            />
        );
    }
}
