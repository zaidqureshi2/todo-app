import {Text,
        StyleSheet,
        View,
        ListView} from 'react-native';
import React,{Component, PropTypes} from 'react';
import TaskRow from './TaskRow'

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  }
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
      </View>
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
export default TaskList;