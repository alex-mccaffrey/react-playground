import react, { Component } from 'react';



class RouletteGun extends Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }


    displayMessage() {

    }

    render() {
        <div>
            <p>{this.message()}</p>
            <button onClick={() => this.setState({spinningTheChamber: true})}>
            Pull the trigger!
            </button>
        </div>
    }
}


export default RouletteGun