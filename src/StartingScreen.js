import React, {Component} from 'react';
import {Form, Header, Button, Input, Container, Card, Segment, Grid, Message} from 'semantic-ui-react';
import {connect} from "react-redux";
import {enterString} from "./redux/actions/puzzleActions";

/**
 * This class will ask the user to input a string that the developer provides, but also have a skip button
 * that will allow the user to do the puzzles anyways but without the correct ending!
 */
class StartingScreen extends Component {
    state = {
        string: "",
    };
    constructor(props) {
        super(props);
        this.inputString = this.inputString.bind(this);
        this.handleInputPress = this.handleInputPress.bind(this);
        this.handleSkipPress = this.handleSkipPress.bind(this);
    }
    inputString(action) {
        this.setState({string: action.target.value});
    }
    handleInputPress() {
        this.props.enterString(this.state.string);
    }
    handleSkipPress() {
        this.props.enterString("");
    }
    render() {
        return (
            <div>
                <Container style={{}}>
                    <Header size="huge" textAlign="center" style={{}}>Welcome!</Header>
                        <Message size="medium" floated>
                                This site will run you through a series of puzzles in order to get to a secret ending! However,
                                it is only meant to be seen by <b>one</b> <i>specific</i> person! So if you think you might be
                                that person, ask me to tell you the <i>secret puzzle code</i> and input it down here! Otherwise,
                                you can still skip and do the puzzles for your enjoyment!
                        </Message>
                    <Grid rows={3} textAlign="center">
                        <Grid.Row>
                            <Form onSubmit={this.handleInputPress}>
                                <Input inverted placeholder="secret code..." onChange={this.inputString} />
                            </Form>
                        </Grid.Row>
                        <Grid.Row>
                            <Button primary onClick={this.handleInputPress}>Attempt the input?</Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Button inverted basic onClick={this.handleSkipPress}>Skip</Button>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    puzzle: state.puzzle
});

const mapDispatchToProps = (dispatch) => {
    return {
        enterString: (string) => {
            dispatch(enterString(string));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartingScreen);