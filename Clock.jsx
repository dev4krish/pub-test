import React from 'react';

class Clock extends React.Component{
    constructor(){
        super();
        this.state={date: new Date()};
    }
    render(){
        return(<div>
        <h1>
            Clock :
        </h1>
        <h2>
            {this.state.date.toLocaleTimeString()}
        </h2>
        </div>);
    }
    tick(){
        this.setState({date:new Date()});
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
}

export default Clock;