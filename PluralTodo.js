import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import store from './todoStore'

class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    })
  }
  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onDone(todo){
    store.dispatch({
      type: 'DELETE_TODO',
      todo,
    });
  }
  renderScene(route, nav){
    switch(route.name) {
      case 'taskform':
        return (<TaskForm onCancel={this.onCancel.bind(this)} onAdd={this.onAdd.bind(this)}/>);
      default:
        return (
          <TaskList
        onAddStarted={this.onAddStarted.bind(this)}
        onDone={this.onDone.bind(this)}
        todos={this.state.todos}/>
        )
    }
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  onAdd(task) {
    // this.state.todos.push({ task });
    // this.setState({ todos: this.state.todos })
    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.nav.pop();
  }
  onCancel() {
    this.nav.pop();
  }
  render() {
    return (
      <Navigator initialRoute={{name: 'tasklist', index: 0}}
                  ref={(nav) => {
                    this.nav = nav;
                  }}
                  configureScene={this.configureScene}
                  renderScene={this.renderScene.bind(this)}/>
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

export default PluralTodo;