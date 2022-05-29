import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./CreateNewListItem.scss";

const CreateNewListItem = (props) => {
  const [state, setState] = useState(props.state);
  const [cardName, setCardName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle((toggle) => !toggle);

  const handleChange = (e) => {
    setCardName(e.target.value);
  };

  const handleAdd = () => {
    const newListItem = state.tasks.push({ id: uuidv4(), text: cardName });

    setState(newListItem);

    setCardName("");
  };

  if (!props.showModal) {
    return null;
  }

  return (
    <div className="create-new-listitem-modal">
      <div className="create-newlistitem-modal-content">
        {!toggle && (
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
                onClick={props.onClose}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </>
        )}
        {toggle && (
          <span className="create-newlistitem-footer" onClick={toggleChecked}>
            <span
              className="create-newlistitem-footer-container"
              onClick={() => setShowModal(true)}>
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
