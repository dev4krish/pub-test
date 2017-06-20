import React from 'react';
import CalculatorRow from './CalculatorRow.jsx';
import Display from './Display.jsx';
import style from '../style/Calculator.css';
import cx from 'classnames';

class CalculatorDemo extends React.Component{
    constructor(){
        super();
        this.state={
            currentInput:'',
            pattern:/[-*+\\]/,
            dotAllowed:true,
        }
        this.click=this.click.bind(this);
    }
    click(input){
        //var input=event.target.value;
        let lastChar;
        switch (input){
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({dotAllowed:true})
                console.log(this.state.currentInput);
                let current=this.state.currentInput;
                lastChar=this.state.currentInput.slice(-1);
                if(lastChar=='+' || lastChar=='-' || lastChar=='*' || lastChar=='/'){
                    this.setState({currentInput:this.state.currentInput.slice(0,-1)+input});
                }
                else if(lastChar=='.'){
                    this.setState({currentInput:this.state.currentInput});
                }
                
                else{
                    this.setState({currentInput:this.state.currentInput==''?'':this.state.currentInput+input});
                }
                break;

            case '=':
            let roundOff=this.props.roundOff;
            lastChar=this.state.currentInput.slice(-1);
                if(!(lastChar=='+' || lastChar=='-' || lastChar=='*' || lastChar=='/' || lastChar=='.' )){
                    if(roundOff=='none'){
                        this.setState({currentInput:this.state.currentInput==''?'':eval(this.state.currentInput)+'',dotAllowed:false});
                    }else{
                        this.setState({currentInput:this.state.currentInput==''?'':(Math.round(eval(this.state.currentInput)*roundOff)/roundOff)+'',dotAllowed:false});
                    }
                    //this.setState({currentInput:this.state.currentInput==''?'':(Math.round(eval(this.state.currentInput)*100)/100)+'',dotAllowed:false});
                }                 
                break;

            case '.':
                lastChar=this.state.currentInput.slice(-1);
                if(this.state.dotAllowed || !this.state.currentInput.includes('.')){
                    console.log("inside . if"+this.state.currentInput.includes('.'));
                    this.setState({currentInput:this.state.currentInput+input});
                    this.setState({dotAllowed:false})
                }
                break;

            case 'c':
                this.setState({currentInput: '',dotAllowed:true});
                break;

            case 'back':
                //var 
                this.setState({currentInput:this.state.currentInput.slice(0,-1)});
                break;

            default:
                this.setState({currentInput:this.state.currentInput=='0'?input:this.state.currentInput+input});
                break;
        }
    }
    render(){
        const input=this.state.currentInput;
        return(
        <div className= {cx(`${style.d1}`)}>
            <Display DisplayInput={input}/>
            <CalculatorRow onClick={this.click}/>
        </div>
        );
    }
}

export default CalculatorDemo;