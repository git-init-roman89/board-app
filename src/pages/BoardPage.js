import { Header, BoardPageWorkspace } from "../components/index";
import { useParams } from "react-router-dom";
import "./BoardPage.scss";

const BoardPage = (props) => {
  let { id } = useParams();
  const board = props.boards.find((item) => {
    return id === item.id;
  });

  return (
    <>
      <Header />
      <main className="boardpage-container">
        <BoardPageWorkspace board={board} boards={props.boards} />
      </main>
    </>
  );
};

export default BoardPage;
