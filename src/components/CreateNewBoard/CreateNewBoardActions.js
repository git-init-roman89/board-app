const ADD_NEW_BOARD = "ADD_NEW_BOARD";

const addNewBoard = (board) => {
    return {
        type: ADD_NEW_BOARD,
        payload: {
            board
        }
    }
}

export {addNewBoard, ADD_NEW_BOARD};