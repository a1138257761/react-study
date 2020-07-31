import React from 'react';
import './IfDemo.css';

export default class IfDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      isLogin: false,
      lists: [
        { name: 'person1', age: 20 },
        { name: 'person2', age: 22 },
        { name: 'person3', age: 28 },
      ]
    }
  }

  changeStatus = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  logIn = () => {
    this.setState({
      isLogin: true
    })
  }
  logOut = () => {
    this.setState({
      isLogin: false
    })
  }

  addPerson = () => {
    this.setState({
      list: this.state.lists.push({ name: `person${this.state.lists.length + 1}`, age: parseInt(Math.random() * 30, 10) })
    })
  }
  reducePerson = () => {
    this.setState({
      list: this.state.lists.pop()
    })
  }

  render() {
    let button;
    if (this.state.isLogin) {
      button = <button onClick={ this.logOut }>退出</button>
    } else {
      button = <button onClick={ this.logIn }>登录</button>
    }


    return (
      <div>
        <h3>条件渲染</h3>
        <div>
          { this.state.flag ? <h4>1</h4> : <h4>2</h4> }
          <button onClick={ this.changeStatus }>更改状态显示1或者2</button>

          {/* 分割线 */}
          <div className="line"></div>
          
          <div>
            { button }
          </div>

          { this.state.lists.map((item, index) => {
            return (
              <div key={ index }>
                <p>{ item.name }</p>
                <p>{ item.age }</p>
              </div>
            )
          })}
          <button onClick={ this.addPerson }>添加信息</button>
          <button onClick={ this.reducePerson }>删除信息</button>
        </div>
      </div>
    )
  }
}