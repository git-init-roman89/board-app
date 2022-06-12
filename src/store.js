import { configureStore } from "@reduxjs/toolkit";
import initialState from "./state/state";
import { ADD_TASK } from "./components/CreateNewListItem/CreateNewListItemActions";
import { ADD_NEW_BOARD } from "./components/CreateNewBoard/CreateNewBoardActions";
import {
  CHANGE_COLUMN_ORDER,
  CHANGE_TASK_ORDER_INSIDE_COLUMN,
  CHANGE_TASK_COLUMN,
  ADD_NEW_COLUMN
} from "./components/BoardPageWorkspace/BoardPageWorkspaceActions";
import { cloneDeep } from "lodash";

const boardsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { task, boardId, columnId } = action.payload;
      const newState = cloneDeep(state).map((item) => {
        if (item.id === boardId) {
          const newBoard = { ...item };
          newBoard.tasks[task.id] = task;
          newBoard.columns[columnId].taskIds.push(task.id);
          return newBoard;
        }
        return { ...item };
      });
      return newState;
    }

    case ADD_NEW_BOARD: {
      const newState = cloneDeep(state);
      newState.push(action.payload.board);
      return newState;
    }

    case CHANGE_COLUMN_ORDER: {
      const { boardId, columnOrder } = action.payload;
      const newState = cloneDeep(state).map((item) => {
        if (item.id === boardId) {
          const newBoard = { ...item };
          newBoard.columnOrder = columnOrder;
          return newBoard;
        }
        return { ...item };
      });
      return newState;
    }

    case CHANGE_TASK_ORDER_INSIDE_COLUMN: {
      const { boardId, columns } = action.payload;
      const newState = cloneDeep(state).map((item) => {
        if (item.id === boardId) {
          const newBoard = { ...item };
          newBoard.columns = columns;
          return newBoard;
        }
        return item;
      });
      return newState;
    }

    case CHANGE_TASK_COLUMN: {
      const { boardId, columns } = action.payload;
      const newState = cloneDeep(state).map((item) => {
        if (item.id === boardId) {
          const newBoard = { ...item };
          newBoard.columns = columns;
          return newBoard;
        }
        return item;
      });
      return newState;
    }

    case ADD_NEW_COLUMN: {
      const { boardId, column } = action.payload;
      const newState = cloneDeep(state).map((item) => {
        if (item.id === boardId) {
          const newBoard = { ...item };
          newBoard.columns[column.id] = column;
          newBoard.columnOrder.push(column.id);
          return newBoard;
        }
        return item;
      });
      return newState;
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  preloadedState: {
    boards: initialState,
  },
});

export default store;
