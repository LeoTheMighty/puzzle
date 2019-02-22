import React, {Component} from 'react';
import {Container, Header, Grid, Icon, Message, Divider} from 'semantic-ui-react';
import {connect} from "react-redux";

class EndingScreen extends Component {
    getLydiaLetter() {
        return (
            <p>
                Dear Lydia, <br/><br/>
                I hope you get to read this letter after a while of trying to figure out my puzzles. You
                know how much I like my games :) I just wanted to do this because I think that you don't
                get enough fun mystery in your life. I think that often times it can always feel like we
                are just going through life, getting confused by something, and finding out a mystery that
                either is horribly boring or one that we'd rather not have found. I think that the world often
                puts us into situations where we are reminded of the bleakness of reality and how dreadfully
                redundant and routine it all can be. <br/><br/>
                For this reason, I wanted to give you a little mystery in your life in the hopes that this lasts
                longer than a day so that you really wonder what's at the end. I want this to be the surprise. I
                hope this fills your heart with love and your mind full of wonder. I love you Lydia. I love you so
                much. I can just imagine you reading this after frustratingly solving my puzzles and getting through
                the rough patches. I hope you feel amazing when you get to the end and find just a long letter from
                your boyfriend. I hope I have given you something that you will cherish and above it all I hope that
                you will find that you enjoyed it along the way. <b>this</b> is my thank you to you. <br/><br/>
                Anyways, now that you made it all this way, how did you like it? What was your favorite puzzle?
                What did you think the surprise at the end was going to be? Are you glad that you stuck it through
                without asking me for help? From a scale from 1-10, how happy did this make you? I wanted to do a
                quick little experiment just to see if this is the kind of gesture you would appreciate! :) Although
                it's not as much as what your smile does to me every single day, I hope it is worth something.<br/>
                <br/>
                In conclusion, the prize at the end is an expression of my love. I hope it isn't too sappy or weird
                or anything. I hope it's just what you need to brighten your day.
                <br/><br/>
                Sincerely, <br/> your one and only true love, <br/> ~ Leonid Igorivich Belyi <br/><br/>
                P.S You can talk to me about this now, I can't wait to hear your thoughts on it all! :))))))
            </p>
        )
    }
    getLydiaComponent() {
        function columns() {
            const columns = [];
            for (let i = 0; i < 10; i++) {
                columns.push(<Grid.Column centered textAlign="justified">
                    <Icon color="pink" name="heart"/>
                </Grid.Column>);
            }
            return columns;
        }
        function rows() {
            const rows = [];
            for (let i = 0; i < 8; i++) {
                rows.push(<Grid.Row textAlign="left" centered>
                    <Icon color="pink" name="heart"/>
                </Grid.Row>);

            }
            return rows;
        }
        return (
            <Container>
                <Grid stretched rows='equal' columns='equal'>
                    <Grid.Row centered stretched textAlign="center">
                        {columns()}
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column floated="left" width={1}>
                            {rows()}
                        </Grid.Column>
                        <Grid.Column stretched>
                            <Message size="tiny">
                                {this.getLydiaLetter()}
                            </Message>
                        </Grid.Column>
                        <Grid.Column floated="right" width={1}>
                            {rows()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered stetched textAlign="center">
                        {columns()}
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
    getOtherComponent() {
        return (
            <Message>
                Good job completing the puzzles! I hope you had fun while doing so!<br/><br/>
                ~ Leonid Igorivich Belyi
            </Message>
        );
    }
    getCorrectComponent() {
        if (this.props.puzzle.ifLydia) {
            return this.getLydiaComponent();
        }
        else {
            return this.getOtherComponent();
        }
    }
    render() {
        return (
            <div>
                <Container>
                    <Header size="small" textAlign="center">Congratulations! You beat my puzzle!</Header>
                </Container>
                <Divider/>
                {this.getCorrectComponent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    puzzle: state.puzzle
});

export default connect(mapStateToProps)(EndingScreen);