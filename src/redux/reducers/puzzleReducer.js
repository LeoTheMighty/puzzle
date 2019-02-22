import {puzzleList} from "../../puzzles";
import {string} from "../../Constants";

const ENTER_STRING = "ENTER_STRING";
const FINISH_PUZZLE = "FINISH_PUZZLE";
const FINISH_TRANSITION = "FINISH_TRANSITION";

const initialState = {
    ifLydia: false,
    currentPuzzleIndex: 0,
    ifStarted: false,
    ifFinished: (puzzleList.length === 0),
    isTransitioning: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_STRING:
            state = {
                ...state,
                ifStarted: true,
                ifLydia: (action.payload === string),
            };
            break;
        case FINISH_PUZZLE:
            state = {
                ...state,
            };
            if (action.payload === puzzleList[state.currentPuzzleIndex]) {
                state.currentPuzzleIndex++;
                state.ifFinished = (state.currentPuzzleIndex === puzzleList.length);
            }
            else {
                console.error("DIDN'T RECEIVE CORRECT PUZZLE STRING!!!");
            }
            break;
        case FINISH_TRANSITION:
            state = {
                ...state,
                isTransitioning: false
            };
            break;
        default:
            state = {
                ...state
            };
            break;
    }
    return state;
}