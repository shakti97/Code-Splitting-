import React ,{Component} from 'react';
class  Clock extends Component{
    constructor(props){
        super(props);
        this.state={date : new Date()};
    }
    componentDidMount(){
        this.timer=setInterval(()=> this.changeState(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    changeState(){
        this.setState({
            date : new Date()
        })
    }
    render(){
     return (
         <div className='Clock'>
             <h4> {this.state.date.toLocaleTimeString()}</h4>
         </div>
     )
 }
}
export default Clock;