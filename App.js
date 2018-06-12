import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Root from './js/pages/setup'

export default class App extends Component {
    render() {
        return (
            <Root />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
