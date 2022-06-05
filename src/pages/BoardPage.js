import { Header, BoardPageWorkspace } from "../components/index";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import "./BoardPage.scss";

const BoardPage = () => {
  const boards = useSelector(state => state.boards);

  let { id } = useParams();
  const board = boards.find((item) => {
    return id === item.id; 
  });


  return (
    <>
      <Header />
      <main className="boardpage-container">
        <BoardPageWorkspace board={board} boards={boards} />
      </main>
    </>
  );
};

export default BoardPage;
