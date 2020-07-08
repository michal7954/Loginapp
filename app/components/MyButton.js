import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    func = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.click} style={styles.Button}>
                <Text> {this.props.text} {this.state.count} </Text>
            </TouchableOpacity>
        );
    }
}


export default MyButton

const styles = StyleSheet.create({
    Button: {
        height: 80,
        width: 200,
        borderRadius: 20,
        backgroundColor: '#448AFF',
        justifyContent: 'center',
        alignItems: 'center',
    }
});