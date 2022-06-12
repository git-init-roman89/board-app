const ADD_TASK = "ADD_TASK";

const addTask = (task, boardId, columnId) => {
    return {
      type: ADD_TASK,
      payload: {
        task,
        boardId,
        columnId
      }
    }
  }

  export {addTask, ADD_TASK};
  