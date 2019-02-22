const ENTER_STRING = "ENTER_STRING";
const FINISH_PUZZLE = "FINISH_PUZZLE";

export function enterString(string) {
    return {
        type: ENTER_STRING,
        payload: string
    };
}
export function finishPuzzle(name) {
    return {
        type: FINISH_PUZZLE,
        payload: name
    };
}
