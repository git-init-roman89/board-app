const CHANGE_COLUMN_ORDER = "CHANGE_COLUMN_ORDER";
const CHANGE_TASK_ORDER_INSIDE_COLUMN = "CHANGE_TASK_ORDER_INSIDE_COLUMN";

const changeColumnOrder = (boardId, columnOrder) => {
    return {
        type: CHANGE_COLUMN_ORDER,
        payload: {
            boardId,
            columnOrder
        }
    }
}

const changeTaskOrderInsideColumn = (boardId, columns) => {
    return {
        type: CHANGE_TASK_ORDER_INSIDE_COLUMN,
        payload: {
            boardId,
            columns
        }
    }
}

export {changeColumnOrder, CHANGE_COLUMN_ORDER, changeTaskOrderInsideColumn, CHANGE_TASK_ORDER_INSIDE_COLUMN}