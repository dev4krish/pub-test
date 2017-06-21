import React from 'react';

class SetState extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
        this.stateHandler=this.stateHandler.bind(this);
    };
    stateHandler(){
        var item="new state";
        var arr=this.state.data;
        arr.push(item);
        this.setState({data:arr});
    };
    render(){
        return(
            <div>
                <button onClick={this.stateHandler}>
                    Set State
                </button>  
                <h4>State Array:{this.state.data}</h4>          
            </div>)
        ;
    }
}

export default SetState;