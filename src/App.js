import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
state={
fullName:'Khalil',
bio:'from Regueb',
profession:'web developper',
show:false,
count:0,
}
 showProfil=()=>{
  this.setState({ show: !(this.state.show) })
}
componentDidMount(){
  setInterval(() => {
    this.setState({count: this.state.count +1});
  }, 1000);
}

  render() {
    return (
      <div>
       {this.state.show ? <div><p>{this.state.fullName}</p>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
        <img src= 'https://f.hellowork.com/blogdumoderateur/2019/03/code-ia-664x441.jpg'/></div>: null}
        <button onClick={()=>this.showProfil()}>show</button>
        <p>
       Time interval since the component was mounted: {this.state.count}
       </p> 
      </div>
    )
  }
}

