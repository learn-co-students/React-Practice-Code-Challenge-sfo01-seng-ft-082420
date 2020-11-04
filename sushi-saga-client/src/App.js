import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [], 
    money: 300,
    eaten: [],
    displayIndex: 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then((sushi) => {
      this.setState({
        sushi
      
      })
    })
  }

  eatSushi = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }



  displayFour = () => {
    return this.state.sushi.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  displayFourMore = () => {
  
  let newDisplayIndex = this.state.displayIndex + 4
    if(newDisplayIndex >= this.state.sushi.length){
      newDisplayIndex = 0
  }
  
  this.setState({
    displayIndex: newDisplayIndex
  })
}
  


  render() {
    return (
      <div className="app">
        <SushiContainer sushi = {this.displayFour()}
        displayFourMore = {this.displayFourMore}
        eatSushi = {this.eatSushi}
        eaten = {this.state.eaten}
        />
        <Table
        money = {this.state.money}
       />
      </div>
    );
  }
}

export default App;