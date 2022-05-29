import { useState, useEffect } from "react";
import WorkspaceColumn from "../WorkspaceColumn/WorkspaceColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./BoardPageWorkspace.scss";
import CreateNewList from "../CreateNewList/CreateNewList";

const BoardPageWorkspace = (props) => {
  const [colState, setColState] = useState(props.state);

  useEffect(() => {
    const data = localStorage.getItem("myState")
    if(data) {
      setColState(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myState", JSON.stringify(colState))
  }, [colState]);

  const workspace = colState.columnOrder.map((columnId, index) => {
    const column = colState.columns[columnId];
    const tasks = column.taskIds.map((taskId) => {
      return colState.tasks[taskId];
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
      const newColumnOrder = Array.from(colState.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColState({
        ...colState,
          columnOrder: newColumnOrder,
      });
      return;
    }

    const start = colState.columns[source.droppableId];
    const finish = colState.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setColState({
        ...colState,
        columns: {
          ...colState.columns,
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

    setColState({
      ...colState,
      columns: {
        ...colState.columns,
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
