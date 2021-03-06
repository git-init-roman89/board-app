import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { CreateNewBoard, BoardItem } from "../index";
import "./BoardList.scss";

const BoardList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const boards = useSelector(state => state.boards);

  const boardsList = boards.map((item) => {
    return <Link to={`/demoboard/${item.id}`} key={item.id} ><BoardItem key={item.id} title={item.title} state={boards} /></Link>;
  });

  return (
    <section className="mainboard-section">
        <div className="mainboard-header-and-boards-container">
      <div className="mainboard-header-container">
        <i class="fa-solid fa-user"></i>
        <h3 className="mainboard-header">Ваші дошки</h3>
      </div>
      <div className="mainboard-boards-container">
       {boardsList}
        </div>
        </div>
        <div className="new-board-container">
        <div
          className="new-board"
          onClick={() => setShowModal(true)}
        >
          <span className="new-board-title">
            Створити нову дошку
          </span>
        </div>
        <CreateNewBoard
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
        </div>
    </section>
  );
};

export default BoardList;
