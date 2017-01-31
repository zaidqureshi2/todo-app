import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import Swipeout from 'react-native-swipeout';

const {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Animated,
} = ReactNative;



export default function render (styles) {

  const doneAnimation = new Animated.ValueXY();
  const localStyles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  row: {
    transform: doneAnimation.getTranslateTransform(),
  },

  });
  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 2,
      friction: 3,
      toValue: {
        x: -500,
        y: 0,
      }
    }).start();
    setTimeout(()=> {
      this.onDonePressed();
    }, 1000)

  }
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: animatedPress.bind(this),
    }
  ];

    return (
      <Animated.View style={{marginBottom: 20}, localStyles.row}>
      <Swipeout backgroundColor='#fff'
            right={buttons}>
        <View style={styles.container}>
          <Text style={styles.label}>{this.props.todo.task}..</Text>
          <Image source={require('../images/test.jpg')} style={localStyles.image}/>
        </View>
      </Swipeout>
      </Animated.View>

    )
  }