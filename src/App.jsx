
//import Messages from './Messages';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';
//import Tabs from './state/Tabs';
//import Accordion from './state-drills/Accordion';
//import AddItemForm from './shopping-list/AddItemForm';
//import ShoppingList from './shopping-list/ShoppingList'
//import DemonynApp from './demonymapp/demonymApp';

import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;













/*class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      /*{ name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
            onAddItem={this.handleAddItem}/>
          </section>
          <section>
      <ShoppingList
        items={this.state.shoppingItems}
        onDeleteItem={this.handleDeleteItem}
        onCheckItem={this.handleCheckItem}
        />
        </section>
        </main>
      </>
    )
  }
}

export default App;*/
