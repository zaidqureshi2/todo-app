import {Text,
        StyleSheet,
        View,
        ListView,
        TouchableHighlight} from 'react-native';
import React,{Component, PropTypes} from 'react';
import TaskRow from './TaskRow'

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {

    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});
class TaskList extends Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };

  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this
        .state
        .dataSource
        .cloneWithRows(nextProps.todos);
    this.setState({dataSource});
  }
  renderRow(todo) {
    return (
        <TaskRow todo={todo} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
        <TouchableHighlight style={styles.button}
            onPress={this.props.onAddStarted}>
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: PropTypes.func.isRequired,
}
export default TaskList;