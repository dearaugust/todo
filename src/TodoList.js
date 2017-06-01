import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './redux/store.js'

class TodoList extends Component {
  handleClick(id){
    console.log(id);
    store.dispatch({type:'CHANGE_COLOR', index: id - 1})
  }
  render(){
    console.log(this.props.todos);
    // let arr = Object.keys(this.props.todos)
    // console.log(arr);
    let todos
     if(this.props.visibilityFilter === 'SHOW_COMPLETED'){
       todos = this.props.todos.filter(item => item.completed)
     }
     if(this.props.visibilityFilter === 'SHOW_ALL'){
       todos = this.props.todos
     }
    let todoList = todos.map(item => (
      <li key={Math.random()}  //生成随机数
        className={item.completed ? 'completed' : null }
        onClick={this.handleClick.bind(this,item.id)}>
        {item.content}
      </li>
    ))
    return(
      <div className="todo-list">
        <div className="container">
          <ul>
            {todoList}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(TodoList)
