import React from 'react'

export default class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  changeHandler = (e) => {
    console.log(e)
    this.setState({
      value: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        表单
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.value} onChange={ this.changeHandler } />
          <button type="submit">提交</button>
        </form>


        <form onSubmit={ this.submit }>
          <label htmlFor="name">
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
