import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormInput} from 'react-form';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ticker:[], weight:[], count: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
     if(event.target.name === 'ticker') {
        let value = this.state.ticker.slice();
        value[i] = event.target.value;
        console.log(value);
        this.setState({ticker: value});
     } else if (event.target.name === 'weight') {
        let value = this.state.weight.slice();
        value[i] = event.target.value;
        console.log(value);
        this.setState({weight: value});
     }

  }

  handleSubmit(event) {
    alert('A name was submitted with tickers: ' + this.state.ticker);
    event.preventDefault();
  }
  
  addClick(){
    this.setState({count: this.state.count+1})
  }
  
  removeClick(i){
     let value = this.state.value.slice();
     value.splice(i,1);
     this.setState({
        count: this.state.count - 1,
        value
     })
  }
  
  createUI(){
     let uiItems = [];
     for(let i = 0; i < this.state.count; i++){
           uiItems.push(
               <div key={i}>
                   <input type="text" value={this.state.ticker[i] || ''} name='ticker' onChange={this.handleChange.bind(this, i)} />
                   <input type="number" value={this.state.weight[i] || 0} name='weight' onChange={this.handleChange.bind(this, i)} />

                   <input type='button' value='remove' onClick={this.removeClick.bind(this,i)}/>
               </div>
            )
     }
     return uiItems || null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.createUI()}        
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));