import React from 'react';
import style from './style.css';

class Calculator extends React.Component{
    constructor(){
        super()
        this.handleInput=this.handleInput.bind(this);
        this.handleCalculation=this.handleCalculation.bind(this);
        this.clearInputBox=this.clearInputBox.bind(this);
        this.state={input:''};
    }
    handleInput(e){
        this.setState({input:e.target.value==''?'':this.state.input+e.target.value});
    }
    handleCalculation(e){
            this.setState({input:eval(this.state.input)});
    }
    clearInputBox(e){
        let inputValue=document.getElementById('input').value;
        let length=inputValue.length;
        inputValue=inputValue.substring(0,length-1);
        this.setState({input:inputValue});
        //String.fromCharCode
        
    }
    render(){
        const input=this.state.input;
        //<ShowCalculatedValue inputProps={input}> </ShowCalculatedValue>
        return(<fieldset className={style.outer}>
            <div className={style.innerDiv} >
                <input className={style.inputBox} id='input' value={input} onChange={this.handleInput} />
               
            </div>
            <div className={style.innerDiv}>
            <button className={style.button} value='0' onClick={this.handleInput}>0</button>
            <button className={style.button} value='1' onClick={this.handleInput}>1</button>
            <button className={style.button} value='2' onClick={this.handleInput}>2</button>
            </div>
            <div className={style.innerDiv}>
            <button className={style.button} value='3' onClick={this.handleInput}>3</button>
            <button className={style.button} value='4' onClick={this.handleInput}>4</button>
            <button className={style.button} alue='5' onClick={this.handleInput}>5</button>
            </div>
            <div className={style.innerDiv}>    
            <button className={style.button} value='6' onClick={this.handleInput}>6</button>
            <button className={style.button} value='7' onClick={this.handleInput}>7</button>
            <button className={style.button} value='8' onClick={this.handleInput}>8</button>
            </div>
            <div className={style.innerDiv}>
            <button className={style.button} value='9' onClick={this.handleInput}>9</button>
            <button className={style.button} value='+' onClick={this.handleInput}>+</button>
            <button className={style.button} value='-' onClick={this.handleInput}>-</button>
            </div>
            <div className={style.innerDiv}>
            <button className={style.button} value='*' onClick={this.handleInput}>*</button>
            <button className={style.button} value='/' onClick={this.handleInput}>/</button>
            <button className={style.button} value='%' onClick={this.handleInput}>%</button>
            </div>
            <div className={style.innerDiv}>
            <button className={style.button} value='' onClick={this.clearInputBox} >del</button>
            <button className={style.button} value='' onClick={this.handleInput} >Clear</button>
            <button className={style.button} onClick={this.handleCalculation} >=</button>
            </div>
        </fieldset>
        );
    }
}
class ShowCalculatedValue extends React.Component{
    render(){
        //return (this.props.inputProps==''?null:<div>{this.props.inputProps}</div>);
        return (<div>{this.props.inputProps}</div>)
    }
}

export default Calculator;