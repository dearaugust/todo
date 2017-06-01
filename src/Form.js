import React, { Component } from 'react'
import store from './redux/store'

class Form extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    store.dispatch({ type: 'ADD_TODO', content: this.text.value})
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'})
    this.form.reset()
  }
  render(){
    return(
      <div className="form">
        <div className="container">
          <form ref={value => this.form = value} onClick={this.handleSubmit}>
            <input ref={value => this.text = value} type="text" placeholder="请输入..." className="text-input" />
            <input type="submit" value="" className="submit-btn" />
          </form>
        </div>
      </div>
    )
  }
}

export default Form
