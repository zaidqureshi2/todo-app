import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';

const {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#666',
  }
})
class TaskForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      task: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}/>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default TaskForm;