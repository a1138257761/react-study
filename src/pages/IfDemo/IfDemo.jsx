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

  deepClone = (target) => {
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
    // 如果是一个数组的话
      if (Array.isArray(target)) {
        result = []; // 将result赋值为一个数组，并且执行遍历
        for (let i in target) {
            // 递归克隆数组中的每一项
            result.push(this.deepClone(target[i]))
        }
      // 判断如果当前的值是null的话；直接赋值为null
      } else if(target===null) {
        result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值    
      } else if(target.constructor===RegExp){
        result = target;
      }else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
        result = {};
        for (let i in target) {
          result[i] = this.deepClone(target[i]);
        }
      }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
    // 返回最终结果
    return result;
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
    let l = this.deepClone(this.state.lists)
    l.push({ name: `person${this.state.lists.length + 1}`, age: parseInt(Math.random() * 30, 10) })
    this.setState({
      lists: l
    })
  }
  reducePerson = () => {
    let l = this.deepClone(this.state.lists)
    l.pop();
    this.setState({
      lists: l
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