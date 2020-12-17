import React, { Component } from 'react';


class Bomb extends Component {
    state = {
        count: 0,
    }


componentDidMount() {

    this.interval = setInterval(() => {

        this.setState({
            count: this.state.count + 1
        })
    }, 1000)
}
componentWillUnmount() {
    clearInterval(this.interval)
}

displayCount() {
    const { count } = this.state
    if (count >= 8){
        clearInterval(this.interval)
        return 'BOOM!!!!'
    }
    else if (count % 2 === 0) {
        return 'tick'
    }
    else {
        return 'tock'
    }
}

render() {
    return (
        <div className='countDown'>
            <p>{this.displayCount()}</p>
        </div>
    )
}
}




export default Bomb