import React from 'react';

class CalculatorForTemp extends React.Component{
    constructor(){
        super();
        this.handleChange=this.handleChange.bind(this);
        this.state={temperature:''};
    }
    handleChange(e){
        this.setState({temperature: e.target.value});
    }
    render(){
        const temperature=this.state.temperature;
        return(<fieldset>  
        <legend>
            Enter Temperature in celcius :
        </legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>);
    }
}
    class BoilingVerdict extends React.Component{
        render(){ 
            return (this.props.celsius>=100 ? <p>The water would boil.</p>:<p>The water would not boil.</p>);
        }     
    }

    export default CalculatorForTemp;
