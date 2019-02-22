import React, {Component} from "react";
import {connect} from "react-redux";
import TestPuzzle from "./testPuzzle";

export const puzzleList = [TestPuzzle.puzzleName, ];

class Puzzles extends Component {
    state = {
        currentPuzzleIndex: -1,
        transitioningPuzzleIndex: -1,
        puzzleShowing: false,
    };
    componentDidMount() {
        this.componentWillReceiveProps(this.props);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.puzzle.currentPuzzleIndex !== this.state.transitioningPuzzleIndex) {
            this.state.transitioningPuzzleIndex = newProps.puzzle.currentPuzzleIndex;
            alert("transition!");
        }
    }
    puzzleMap = {
        [TestPuzzle.puzzleName]: <TestPuzzle/>,
    };
    getCorrectPuzzle() {
        const index = this.state.currentPuzzleIndex;
        const nextIndex = index + 1;
        if (index === -1) {
            // No first one
        }
        else if (nextIndex >= puzzleList.length) {
            // No next one
        }
        else {

        }
        const puzzle = this.puzzleMap[puzzleList[this.props.puzzle.currentPuzzleIndex]];
        return null;
    }
    getPuzzle() {
        const index = this.state.currentPuzzleIndex;
        if (index < puzzleList.length) {
            return this.puzzleMap[puzzleList[index]];
        }
        return null;
    }
    getNextPuzzle() {
        const index = this.state.currentPuzzleIndex + 1;
        if (index < puzzleList.length) {
            return this.puzzleMap[puzzleList[index]];
        }
        return null;
    }
    render() {
        return (
            <div>
                {this.getCorrectPuzzle()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    puzzle: state.puzzle
});

export default connect(mapStateToProps)(Puzzles);

