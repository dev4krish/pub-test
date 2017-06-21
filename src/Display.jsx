import React from 'react';
import style from '../style/Calculator.css';
import cx from 'classnames';


class Display extends React.Component{
    render(){
        return(<div className={style.input_pannel} >
                <input className={cx({[`${style.inputDiv}`]:true})} id='input' value={this.props.DisplayInput} tabIndex="1" />   
        </div>);
    }
}

export default Display;