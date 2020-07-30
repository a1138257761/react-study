import React from 'react';

export default class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: ['首页', '关于', '介绍'],
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }
  
  changeOwnTitle = () => {
    this.props.changeWord('我是子组件修改的文本');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="menu">
        <ul>
          { this.state.menus.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

        <h3>{ this.props.title }</h3>

        <button onClick={ this.changeOwnTitle }>子组件修改props的文本</button>


      </div>
    )
  }
}