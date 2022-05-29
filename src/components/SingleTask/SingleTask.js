import { Draggable } from "react-beautiful-dnd";
import "./SingleTask.scss";

const SingleTask = (props) => {
  return (
    <Draggable key={props.task.id} draggableId={props.task.id} index={props.index} >
      {(provided) => (
        <div
          className="workspace-card-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="workspace-card-item-title">{props.task.text}</h4>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTask;
