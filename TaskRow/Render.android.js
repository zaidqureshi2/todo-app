import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import Swipeout from 'react-native-swipeout';

const {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} = ReactNative;

const localStyles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  }

  });

export default function render (styles) {
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed.bind(this),
    }
  ]
    return (
      <View style={{marginBottom: 20}}>
      <Swipeout backgroundColor='#fff'
            right={buttons}>
        <View style={styles.container}>
          <Text style={styles.label}>{this.props.todo.task}..</Text>
          <Image source={require('../images/test.jpg')} style={localStyles.image}/>
        </View>
      </Swipeout>
      </View>

    )
  }