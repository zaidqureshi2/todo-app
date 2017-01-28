import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';

const {
  Text,
  View,
  StyleSheet,
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
  }
})
class TaskRow extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}..</Text>
      </View>
    )
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;