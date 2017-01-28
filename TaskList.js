import {Text,
        StyleSheet,
        View,
        ListView} from 'react-native';
import React,{Component} from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
        <Text>{todo.task}</Text>
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
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
export default TaskList;