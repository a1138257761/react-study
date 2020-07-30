import React from 'react';

export default class SetStateDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  async changeCount() {
    // 1. 改变之后打印的还是原来的值
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log(this.state.count);

    // 2. 这种写法count会同步更新
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log(this.state.count)
    // })

    // 利用promise
    // this.asyncChangeCount({ count: this.state.count + 1 }).then(() =>{ 
    //   console.log(this.state.count)
    // })
    // await this.asyncChangeCount({ count: this.state.count + 1 })
    // console.log(this.state.count)
  }
  asyncChangeCount(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }
  
  componentDidMount() {
    document.getElementById('button').addEventListener('click', this.clickToChangeCount, false)
  }
  // 原生事件中是同步的
  clickToChangeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  
  render() {
    return (
      <div className="demo">
        <p>this.setState修改值是同步还是异步</p>
        <h3>{ this.state.count }</h3>
        <button id="button" onClick={ this.changeCount.bind(this) }>修改state值</button>
      </div>
    )
  }
}