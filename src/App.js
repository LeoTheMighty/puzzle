import React, { Component } from 'react';
import Puzzles from "./puzzles";
import {connect} from "react-redux";
import StartingScreen from "./StartingScreen";
import EndingScreen from "./EndingScreen";
import './App.css';

class App extends Component {
    correctComponent() {
        if (!this.props.puzzle.ifStarted) {
            return (<StartingScreen/>);
        }
        else if (this.props.puzzle.ifFinished) {
            return (<EndingScreen/>);
        }
        else {
            return (<Puzzles/>);
        }
    }
    render() {
        return (
            <div className="App">
                {this.correctComponent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    puzzle: state.puzzle,
});

export default connect(mapStateToProps)(App);
