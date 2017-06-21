import React from 'react';
import style from '../style/Calculator.css';
import cx from 'classnames';

class CalculatorRow extends React.Component{

constructor(){
        super();
        this.state={
            keyButton:{}
        }
        this.handleClickEvent=this.handleClickEvent.bind(this);
        this.handleKeydownEvent=this.handleKeydownEvent.bind(this);
    }

componentDidMount() {
    document.querySelectorAll('button').forEach((button) => {
        this.state.keyButton[button.dataset.code] = button;
    });
    // var buttons = document.querySelectorAll('button');
    // buttons = [].slice.call(buttons);
    // buttons.forEach((button) => {
    //     this.state.keyButton[button.dataset.code] = button;
    // });
    window.addEventListener('keydown',this.handleKeydownEvent);
}
handleKeydownEvent(event) {
      let button;
      let key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
      if (button = this.state.keyButton[key]) {
          button.click();
          event.stopPropagation();
          event.preventDefault();
        }
};
handleClickEvent(event) {
this.props.onClick(event.target.value);

}


render(){return(
<div className={cx({[`${style.button_pannel}`]:true, [`${style.flexRow}`]:true})}>
                    <div className={cx({[`${style.flexColumn}`]:true,[`${style.s3}`]:true})}>
                         <div className={cx({[`${style.flexRow}`]:true, [`${style.s1}`]:true})}>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="back" data-code= '8' onClick={this.handleClickEvent} tabIndex="2" >del</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="c" data-code= '67' onClick={this.handleClickEvent} tabIndex="3" >Clear</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="+" data-code= 'shift+187' onClick={this.handleClickEvent} tabIndex="4">+</button>
                             
                             </div>
                             <div className={cx({[`${style.flexRow}`]:true, [`${style.s1}`]:true})}>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="1" data-code= '49' onClick={this.handleClickEvent} tabIndex="6">1</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="2" data-code= '50' onClick={this.handleClickEvent} tabIndex="7">2</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="3" data-code= '51' onClick={this.handleClickEvent} tabIndex="8">3</button>
                             </div>
                             <div className={cx({[`${style.flexRow}`]:true, [`${style.s1}`]:true})}>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="4" data-code= '52' onClick={this.handleClickEvent} tabIndex="10">4</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="5" data-code= '53' onClick={this.handleClickEvent} tabIndex="11">5</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="6" data-code= '54' onClick={this.handleClickEvent} tabIndex="12">6</button>
                             </div>
                             <div className={cx({[`${style.flexRow}`]:true, [`${style.s1}`]:true})}>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="7" data-code= '55' onClick={this.handleClickEvent} tabIndex="14">7</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="8" data-code= '56' onClick={this.handleClickEvent} tabIndex="15">8</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="9" data-code= '57' onClick={this.handleClickEvent} tabIndex="16">9</button>
                             </div> 
                            <div className={cx({[`${style.flexRow}`]:true, [`${style.s1}`]:true})}>       
                                <button className={cx({[`${style.button}`]:true,[`${style.s2}`]:true})} value="0" data-code= '48' onClick={this.handleClickEvent} tabIndex="17">0</button>
                                 <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="." data-code= '190' onClick={this.handleClickEvent} tabIndex="18">.</button>                 
                            </div>
                    </div>
                    <div className={cx({[`${style.flexColumn}`]:true, [`${style.s1}`]:true})}>
                       
                        <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})}  value="-" data-code= '189' onClick={this.handleClickEvent} tabIndex="5">-</button>
                        <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="*" data-code= 'shift+56' onClick={this.handleClickEvent} tabIndex="9">*</button>
                        <button className={cx({[`${style.button}`]:true,[`${style.s1}`]:true})} value="/" data-code= '191' onClick={this.handleClickEvent} tabIndex="13">/</button>
                        <button className={cx({[`${style.button}`]:true,[`${style.s2}`]:true})} value="=" data-code= '13' onClick={this.handleClickEvent} tabIndex="19">=</button>
                        

                        
                    </div>
            </div>)};
}
export default CalculatorRow;