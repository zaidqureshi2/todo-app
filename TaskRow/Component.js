import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import Render from './Render';

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
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  label: {
    fontSize: 20,
    fontWeight: '200',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
})
class TaskRow extends Component {
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }
  render(){
    return Render.bind(this)(styles);
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TaskRow;