import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MyButton from './MyButton'

export default class Screen1 extends Component {
    static navigationOptions = {
        // header: null,
        title: "Strona 1",
        headerStyle: {
            backgroundColor: "green",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <MyButton
                    text="abc"
                    MyClick={() => this.props.navigation.navigate("s2", { a: 1, b: 2 })}
                />

                <FlatList
                    data={
                        [
                            { key: 'a' },
                            { key: 'b' },
                            { key: 'c' },
                        ]
                    }

                    renderItem={({ item }) => <Text>{item.key}</Text>}

                />

            </View>
        );
    }
}
