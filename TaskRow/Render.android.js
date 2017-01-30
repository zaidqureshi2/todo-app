import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';

const {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = ReactNative;

export default function render (styles) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}..</Text>
        <TouchableHighlight style={styles.doneButton} onPress={() => this.props.onDone(this.props.todo)}>
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    )
  }