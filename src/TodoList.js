import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './redux/store.js'

class TodoList extends Component {
  constructor(){
    super()
  }
  handleClick(i){
    console.log(i);
    store.dispatch({type:'CHANGE_COLOR', id: i})
  }
  render(){
    console.log(this.props.todos);
    let arr = Object.keys(this.props.todos)
    console.log(arr);
    let todoList = arr.map((item) => (
      <li key={Math.random()} className={this.props.todos[item].completed ? 'completed' : null } onClick={this.handleClick.bind(this,this.props.todos[item].id)}>{this.props.todos[item].title}</li>
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
  todos: state
})

export default connect(mapStateToProps)(TodoList)
