import React from 'react';
import Calculator from './src/CalculatorDemo.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.state={roundOff:'none',
        roundOffMap:{'none':'none','1': '10', '2': '100','3':'1000','4':'10000'}
    };
        this.setroundOff=this.setroundOff.bind(this);

    }
    setroundOff(event){
        this.setState({roundOff:event.target.value});
    }

    componentWillMount() {
	    this.setState({roundOff: 'none'});
    }

    componentWillReceiveProps(nextProp) {
	    this.setState({roundOff: nextProp});
    }
   render() {
      return (<div><Calculator roundOff={this.state.roundOffMap[this.state.roundOff]}/>
      <label> Select Round Off value :</label>
       <select value={this.state.roundOff} onChange={this.setroundOff}> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="none">none</option>
     </select>
    </div>);
   }
}

export default App;
