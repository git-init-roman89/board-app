import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./CreateNewBoard.scss";

const CreateNewBoard = ({state, mutateState, showModal, onClose}) => {
  const [boardName, setBoardName] = useState("");

  const handleChange = (e) => {
    setBoardName(e.target.value);
  }

  const handleAdd = () => {
    const newState = {...state};
    newState.boards.push({id: uuidv4(), title: boardName});
    mutateState(newState);
    setBoardName("");
    onClose();
  }

  if (!showModal) {
    return null;
  }

  return (
    <div className="create-newboard-modal">
      <div className="create-newboard-modal-content">
        {/* header */}
        <div className="create-newboard-modal-header">
          <div className="create-newboard-modal-title-container">
            <h3 className="create-newboard-modal-title">Створити дошку</h3>
            <button className="create-newboard-modal-title-button" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div className="create-newboard-modal-title-underline"></div>
        </div>
        {/* main */}
        <div className="create-newboard-modal-main">
          <div className="create-newboard-modal-main-title-container">
            <h3 className="create-newboard-modal-main-title">Назва дошки</h3>
            <i class="fa-solid fa-star-of-life"></i>
          </div>
          <input
            type="text"
            className="create-newboard-modal-main-input"
            name="newboard-name"
            required
            value={boardName}
            onChange={handleChange}
          />
          <div className="create-newboard-modal-main-subtitle-container">
            <i class="fa-solid fa-hands"></i>
            <h3 className="create-newboard-modal-main-subtitle">
              Необхідно вказати назву дошки
            </h3>
          </div>
        </div>
        {/* footer */}
        <div className="create-newboard-modal-footer">
          <button type="button" className="create-newboard-modal-button" onClick={handleAdd}>Створити</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBoard;
