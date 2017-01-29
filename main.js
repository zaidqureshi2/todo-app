import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TaskList from './TaskList'

class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        },
      ],
    };
  }
  onAddStarted() {
    console.log('On add started')
  }
  render() {
    return (
      <TaskList
        onAddStarted={this.onAddStarted.bind(this)}
        todos={this.state.todos}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(PluralTodo);
