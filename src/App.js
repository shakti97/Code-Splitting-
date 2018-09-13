import React, { Component } from 'react';
import AboutUs from './Components/About';
// import Clock from './Components/Clock'
import './App.css';
import RenderComp from './Components/RenderComp';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ title : '', heading : 'i m the heading'};
    console.log('this.state0',this.state);
  }
  ChangeTitle=(event)=>{
    var title=event.target.value;
    console.log('changing the title');
    console.log('this',this);
    this.setState({title : title},()=>{console.log('this.state2',this.state);});
    
  }
  componentWillMount(){
    this.setState({ title :'  Component Did Mount'},()=>{console.log('this.state1',this.state);});
  }
  render() {
    return (
      <div className="App">  
      <div className="jumbotron-heading">React App</div>
      <h2>REACT APP DEMO</h2> 
      <AboutUs title= { this.state.title ? this.state.title : 'its About Us' } Change={this.ChangeTitle}>My subtitle is : Acknowledgement</AboutUs>
      <RenderComp/>
      </div>
    );
  }
}

export default App;
