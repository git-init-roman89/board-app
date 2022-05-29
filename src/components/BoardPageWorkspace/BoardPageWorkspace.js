import { useState, useEffect } from "react";
import WorkspaceColumn from "../WorkspaceColumn/WorkspaceColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./BoardPageWorkspace.scss";
import CreateNewList from "../CreateNewList/CreateNewList";

const BoardPageWorkspace = (props) => {
  const [board, setBoard] = useState(props.board);

  // useEffect(() => {
  //   const data = localStorage.getItem("myState")
  //   if(data) {
  //     setboard(JSON.parse(data))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("myState", JSON.stringify(board))
  // }, [board]);

  const workspace = board.columnOrder.map((columnId, index) => {
    const column = board.columns[columnId];
    const tasks = column.taskIds.map((taskId) => {
      return board.tasks[taskId];
    });
    return (
        <WorkspaceColumn
        key={column.id}
        column={column}
        tasks={tasks}
        index={index}
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
      const newColumnOrder = Array.from(board.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setBoard({
        ...board,
          columnOrder: newColumnOrder,
      });
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setBoard({
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      });
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
      ...board,
      columns: {
        ...board.columns,
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
              <CreateNewList state={props.state}/>
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default BoardPageWorkspace;
