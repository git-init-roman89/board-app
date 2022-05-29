import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./CreateNewListItem.scss";

const randomId = (max) => Math.floor(Math.random() * Math.floor(max));

const CreateNewListItem = (props) => {
  const [cardName, setCardName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setCardName(e.target.value);
  };

  const handleAdd = () => {
    const newBoard = {...props.board};
    const taskId = `task-${randomId(1000)}` 
    newBoard.tasks[taskId] = { id: uuidv4(), text: cardName };
    newBoard.columns[props.columnId].taskIds.push(taskId);
    props.setBoard(newBoard);
    setCardName("");
    setShowModal(false);
  };

  return (
    <div className="create-new-listitem-modal">
      <div className="create-newlistitem-modal-content">
        {showModal && (
          <>
            <div className="create-newlistitem-modal-main">
              <input
                type="text"
                className="create-newlistitem-input"
                name="newboard-name"
                required
                value={cardName}
                onChange={handleChange}
              />
            </div>
            <div className="create-newlistitem-footer">
              <button
                type="button"
                className="create-newlistitem-button"
                onClick={handleAdd}
              >
                Додати картку
              </button>
              <button
                className="create-newboard-modal-title-button"
                onClick={() => setShowModal(false)}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </>
        )}
        {!showModal && (
          <span className="create-newlistitem-footer" onClick={() => setShowModal(true)}>
            <span
              className="create-newlistitem-footer-container"
              >
              <i class="fa-solid fa-plus"></i>
              <h3 className="workspace-footer-title">Додати картку</h3>
            </span>
            <i class="fa-solid fa-city"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default CreateNewListItem;
