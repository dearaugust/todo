import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
  }
  render(){
    return(
      <div className="form">
        <div className="container">
          <form onClick={this.handleSubmit}>
            <input type="text" placeholder="请输入..." className="text-input" />
            <input type="submit" value="" className="submit-btn" />
          </form>
        </div>
      </div>
    )
  }
}

export default Form
