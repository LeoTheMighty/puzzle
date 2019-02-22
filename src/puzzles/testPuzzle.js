import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import {finishPuzzle} from "../redux/actions/puzzleActions";
import {connect} from "react-redux";

class TestPuzzle extends Component {
    static puzzleName = "test";

    constructor(props) {
        super(props);
        this.handleFinish = this.handleFinish.bind(this);
    }


    handleFinish() {
        this.props.finishPuzzle(TestPuzzle.puzzleName);
    }

    render() {
        return (
            <div>
                <Button primary onClick={this.handleFinish}>FINISH</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    puzzle: state.puzzle
});

const mapDispatchToProps = (dispatch) => {
    return {
        finishPuzzle: (name) => {
            dispatch(finishPuzzle(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPuzzle);
