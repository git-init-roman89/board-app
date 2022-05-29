import { useState } from "react";
import { CreateNewListItem, SingleTask } from "../index";
import { Droppable, Draggable } from "react-beautiful-dnd";
import "./WorkspaceColumn.scss";

const WorkspaceColumn = (props) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="workspace-column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <span className="workspace-column-title-container">
            <h3
              className="workspace-column-title"
              {...provided.dragHandleProps}
            >
              {props.column.title}
            </h3>
            <i class="fa-solid fa-ellipsis"></i>
          </span>
          <div className="workspace-card">
            <div className="workspace-card-logo"></div>
            <div className="workspace-card-text">
              <h4 className="workspace-card-subtitle">
                {props.column.subtitle}
              </h4>
              <div className="workspace-card-icons">
                <i class="fas fa-bars"></i>
                <i class="fa-solid fa-paperclip"></i>
              </div>
            </div>
            <Droppable
              droppableId={props.column.id}
              key={props.column.id}
              type="task"
            >
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {props.tasks.map((task, index) => (
                    <SingleTask key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <span className="workspace-column-footer">
              <CreateNewListItem
                onClose={() => setShowModal(false)}
                showModal={showModal}
                state={props.state}
              />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default WorkspaceColumn;
