import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import WorkspaceColumn from "../WorkspaceColumn/WorkspaceColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./BoardPageWorkspace.scss";
import CreateNewList from "../CreateNewList/CreateNewList";
import { changeColumnOrder, changeTaskOrderInsideColumn } from "./BoardPageWorkspaceActions";

const BoardPageWorkspace = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = localStorage.getItem("myState")
  //   if(data) {
  //     setBoard(JSON.parse(data))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("myState", JSON.stringify(board))
  // }, [board]);
  const setBoard = () => {};
  const workspace = props.board.columnOrder.map((columnId, index) => {
    const column = props.board.columns[columnId];
    const tasks = column.taskIds.map((taskId) => {
      return props.board.tasks[taskId];
    });
    return (
      <WorkspaceColumn
        key={columnId}
        column={column}
        tasks={tasks}
        index={index}
        board={props.board}
        columnId={columnId}
      />
    );
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(props.board.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      dispatch(changeColumnOrder(props.board.id, newColumnOrder));
      return;
    }

    const start = props.board.columns[source.droppableId];
    const finish = props.board.columns[destination.droppableId];

    if (start === finish) {
      console.log(start)
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      dispatch(changeTaskOrderInsideColumn(props.board.id, {
        ...props.board.columns,
        [newColumn.id]: newColumn,
      }))
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setBoard({
      ...props.board,
      columns: {
        ...props.board.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <section
              className="boardpage-workspace"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {workspace}
              {provided.placeholder}
              <CreateNewList board={props.board} setBoard={setBoard} />
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default BoardPageWorkspace;
