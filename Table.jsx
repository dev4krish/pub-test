import React from 'react';

class TableDemo extends React.Component {
constructor(){
    super();
    this.state={
            data:[{id:"1",name:"kuldeep",sub:"pcm"},{id:"2",name:"kuldeep2jhj",sub:"pcb"},{id:"2",name:"kuldeep2jhj",sub:"pcb"}]
    }

}

    render(){
        return(
            <div>
                <table>
                    <tbody>

                         { this.state.data.map((info) => 
                           <tr>
                            <td>
                             {info.id}  
                            </td>  
                             <td>
                             {info.name}  
                            </td>  
                             <td>
                             {info.sub}  
                            </td>   
                        </tr>
                         ) }

                        
                    </tbody>
                </table>
 <table>
                    {
                        this.state.data.map(function(student){
                            return <tr> <td>{student.id} </td> 
                                    <td>{student.name} </td>  </tr>
                        })
                    }
                </table>

            </div>
        );
    }

}

export default TableDemo;