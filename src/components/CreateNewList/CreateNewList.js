import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addNewColumnAction } from "../BoardPageWorkspace/BoardPageWorkspaceActions";
import "./CreateNewList.scss";

const CreateNewList = ({ board, setBoard }) => {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle((toggle) => !toggle);

  const [columnName, setColumnName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setColumnName(e.target.value);
  };

  const addNewColumn = () => {
    const columnId = uuidv4();
    dispatch(
      addNewColumnAction(board.id, {
        id: columnId,
        subtitle: "Move anything 'ready' here",
        taskIds: [],
        title: columnName,
      })
    );

    setColumnName("");
  };
  return (
    <div className="create-newlist-container">
      {toggle && (
        <button className="create-newlist-button" onClick={toggleChecked}>
          <i class="fa-solid fa-plus"></i>
          <span>Додайте ще один список</span>
        </button>
      )}
      {!toggle && (
        <div className="create-newlist-input-container">
          <input
            type="text"
            className="create-newlist-input"
            placeholder="Введіть назву списку..."
            value={columnName}
            onChange={handleChange}
          />
          <div className="create-newlist-input-button-container">
            <button
              className="create-newlist-input-button"
              onClick={addNewColumn}
            >
              Додати список
            </button>
            <button
              className="create-newlist-input-close-button"
              onClick={toggleChecked}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewList;
