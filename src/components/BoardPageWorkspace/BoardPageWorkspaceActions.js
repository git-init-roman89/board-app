const CHANGE_COLUMN_ORDER = "CHANGE_COLUMN_ORDER";
const CHANGE_TASK_ORDER_INSIDE_COLUMN = "CHANGE_TASK_ORDER_INSIDE_COLUMN";
const CHANGE_TASK_COLUMN = "CHANGE_TASK_COLUMN";
const ADD_NEW_COLUMN = " ADD_NEW_COLUMN";

const changeColumnOrder = (boardId, columnOrder) => {
  return {
    type: CHANGE_COLUMN_ORDER,
    payload: {
      boardId,
      columnOrder,
    },
  };
};

const changeTaskOrderInsideColumn = (boardId, columns) => {
  return {
    type: CHANGE_TASK_ORDER_INSIDE_COLUMN,
    payload: {
      boardId,
      columns,
    },
  };
};

const changeTaskColumn = (boardId, columns) => {
  return {
    type: CHANGE_TASK_COLUMN,
    payload: {
      boardId,
      columns,
    },
  };
};

const addNewColumnAction = (boardId, column) => {
  return {
    type: ADD_NEW_COLUMN,
    payload: {
      boardId,
      column,
    },
  };
};

export {
  changeColumnOrder,
  CHANGE_COLUMN_ORDER,
  changeTaskOrderInsideColumn,
  CHANGE_TASK_ORDER_INSIDE_COLUMN,
  changeTaskColumn,
  CHANGE_TASK_COLUMN,
  addNewColumnAction,
  ADD_NEW_COLUMN
};
