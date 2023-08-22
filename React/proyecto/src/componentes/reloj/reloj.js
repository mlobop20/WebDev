import React, { Component } from 'react';

export default class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.actualizarHora(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    actualizarHora() {
        this.setState({ time: new Date() });
    }

    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

