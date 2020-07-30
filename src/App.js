import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Menus from './pages/Menus/Menus.jsx';  // 生命周期以及父子组件改变props值
import SetStateDemo from './pages/SetStateDemo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '文本1'
    }
  }

  //父子组件改变props值
  // changeTitle = () => {
  //   this.setState({
  //     title: '文本2'
  //   })
  // }
  // changeTitles = (data) => {
  //   this.setState({
  //     title: data
  //   })
  // }
  

  render() {
    return (

      <div className="app">

        {/* 父子组件改变props值 */}
        {/* <Menus title={ this.state.title } changeWord={ this.changeTitles } />
        <button onClick={ this.changeTitle }>修改文本</button> */}

        <SetStateDemo />
        
      </div>

    )
  }
}

export default App;
