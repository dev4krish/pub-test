import React from 'react';

class StateNPropDemo extends React.Component{


constructor() {
    super();
    this.state = {
        header:"Header Data",
        content:"Content Data"
    }
}

render(){
    return(<div>
        <Header headerProp={this.state.header}/>
        <Content contentProp={this.state.content}/>
        </div>);
}


}

class Header extends React.Component{
    render(){
        return(<div>{this.props.headerProp}</div>);
    }
}

class Content extends React.Component{
    render(){
        return(<div>{this.props.contentProp}</div>);
    }
}

export default StateNPropDemo;