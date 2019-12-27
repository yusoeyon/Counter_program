import React from 'react';
import Button from './Button';
import Display from './Display';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number:0
    }
  }

  onClickHandler = (payload) => {
    console.log(this);
    this.setState({number:this.state.number+payload}); /*number 값 갱신 */
  }

  render(){
    return(
      <div className="App">
        <Display value={this.state.number}/>
        <Button ClickHandler={()=>this.onClickHandler(1)}>plus</Button>
        <Button ClickHandler={()=>this.onClickHandler(-1)}>minus</Button>
      </div>
    );
  }
}

export default App;
