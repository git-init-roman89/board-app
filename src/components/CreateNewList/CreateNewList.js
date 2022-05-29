import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./CreateNewList.scss";

const CreateNewList = (props) => {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle((toggle) => !toggle);

  const [newColumn, setNewColumn] = useState(props.state);
  const [columnName, setColumnName] = useState("");

  const handleChange = (e) => {
    setColumnName(e.target.value);
  }

  const addNewColumn = () => {
    setNewColumn((newColumn) => {
      return {
        ...newColumn,
        columns: {
          ...newColumn.columns,
          [columnName]: {
            id: uuidv4(),
            title: columnName,
            subtitle: "Move anything from doing to done here",
            taskIds: ["task-16", "task-17", "task-18", "task-19", "task-20"],
          },
        },
        columnOrder: [...newColumn.columnOrder, columnName]
      };
    });

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
