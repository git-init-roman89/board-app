import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addTask} from "./CreateNewListItemActions";
import "./CreateNewListItem.scss";

const CreateNewListItem = (props) => {
  const [cardName, setCardName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setCardName(e.target.value);
  };

  const handleAdd = () => {
    const taskId = uuidv4();
    const task = { id: taskId, text: cardName };
    dispatch(addTask(task, props.board.id, props.columnId))
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
          <span
            className="create-newlistitem-footer"
            onClick={() => setShowModal(true)}
          >
            <span className="create-newlistitem-footer-container">
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
