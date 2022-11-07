import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    state = {
        creatures: []
    };

    componentDidMount() {
        this.getCreatures();
    }

    getCreatures() {
        axios 
            .get('http://127.0.0.1:8000/api/creatures')
            .then (res => {
                this.setState({ creatures: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.creatures.map(item => (
                    <div key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Description: {item.description}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>
        )
    }
}

export default App;