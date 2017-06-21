import React from 'react';

class ListnKeys extends React.Component{
    constructor(){
        super();
        this.state={data:[1,2,3,4,5]};
    }
    render(){
        return(<ul>{this.state.data.map((number) =><li>{number}</li>) }</ul>);
    }
}

export default ListnKeys;