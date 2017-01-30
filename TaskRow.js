import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';

const {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '200',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  }
})
class TaskRow extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}..</Text>
        <TouchableHighlight style={styles.doneButton} onPress={() => this.props.onDone(this.props.todo)}>
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TaskRow;