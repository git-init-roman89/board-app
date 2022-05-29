import { Header, BoardPageWorkspace } from "../components/index";
import { useParams } from "react-router-dom";
import "./BoardPage.scss";

const BoardPage = (props) => {
  let { id } = useParams();
//   const boardsListComponent = boardsList.find((item) => {
//     return id === item.id;
//   });

  return (
    <>
      <Header />
      <main className="boardpage-container">
        <BoardPageWorkspace state={props.state} />
      </main>
    </>
  );
};

export default BoardPage;
