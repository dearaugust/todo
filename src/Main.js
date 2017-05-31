import React, { Component } from 'react'
import TodoList from './TodoList.js'
import Form from './Form.js'
import Actions from './Actions.js'

const Header = () =>(
  <div className="header">TODO</div>
)

class Main extends Component {
  render(){
    return(
      <div className="main">
        <Header />
        <TodoList />
        <Form />
        <Actions />
      </div>
    )
  }
}

export default Main
