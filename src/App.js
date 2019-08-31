import React , { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

class App extends Component{
constructor(props){
super (props);
this.state = {
  input : "",
  previousNumber :"",
  currentNumber : "",
  operator:"",
  formula : [],
  afterCalculation: false

};
}

addToInput = val =>
 {
         

         this.setState({input : this.state.input + val });
};

  addZeroToInput = val => {
// if this.state.input is not empty then add zero 
if (this.state.input !== ""){
  this.setState({ input: this.state.input + val });
}
}

addDecimal = val => {
//only add decimal if there is no current decimal point present in the input area 
if (this.state.input.indexOf(".") === -1  ){
this.setState({ input: this.state.input + val });
}
}

onClear = () => {
    this.setState({ input : ""});
  }

add = () => {
this.state.previousNumber = this.state.input;
this.setState({ input : ""});
this.state.operator = "plus";

}


evaluate = () => {
this.state.currentNumber = this.state.input;
if (this.state.operator == "plus" ){
this.setState({
input : parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
});
}
else if (this.state.operator == "minus" ){
this.setState({
input : parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
});
}
else if (this.state.operator == "div" ){
this.setState({
input : parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
});
}
else if (this.state.operator == "mod" ){
this.setState({
input : parseInt(this.state.previousNumber) % parseInt(this.state.currentNumber)
});
}
else {
this.setState({
input : parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
});
}
}

sub = () => {
this.state.previousNumber = this.state.input;
this.setState({ input : ""});
this.state.operator = "minus";
}
div = () => {
this.state.previousNumber = this.state.input;
this.setState({ input : ""});
this.state.operator = "div";
}
mul = () => {
this.state.previousNumber = this.state.input;
this.setState({ input :""});
this.state.operator = "mul";
}
mod = () => {
this.state.previousNumber = this.state.input;
this.setState({ input :""});
this.state.operator = "mod";
}

render () {
  return (
    <div className="App"> 
    <div className="calc-wrapper"> 

    <div className="row"> 
    <Input>{this.state.input}</Input>
    </div>
    <div className="row"> 
    <Button handleClick = { this.onClear}>AC</Button>
    
    <Button handleClick = { this.mod}>%</Button>
    </div>
    <div className="row"> 
    <Button handleClick = { this.addToInput}>7</Button>
    <Button handleClick = { this.addToInput}>8</Button>
    <Button handleClick = { this.addToInput}>9</Button>
    <Button handleClick = { this.div}>/</Button>
    </div>
    <div className="row"> 
    <Button  handleClick = { this.addToInput}>4</Button>
    <Button handleClick = { this.addToInput}>5</Button>
    <Button handleClick = { this.addToInput}>6</Button>
    <Button handleClick = {this.mul}>*</Button>
    </div>
    <div className="row"> 
    <Button handleClick = { this.addToInput}>1</Button>
    <Button handleClick = { this.addToInput}>2</Button>
    <Button handleClick = { this.addToInput}>3</Button>
    <Button handleClick = { this.add } >+</Button>
    </div>
    <div className="row"> 
    <Button  handleClick = { this.addDecimal}>.</Button>
    <Button  handleClick = { this.addZeroToInput}>0</Button>
    <Button  handleClick = { this.evaluate}>=</Button>
    <Button handleClick = {this.sub}>-</Button>
    </div>
    </div>
    </div>
  );
}
}

export default App;

