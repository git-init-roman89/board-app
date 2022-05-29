import { BoardList, Header, Sidebar } from "../components/index";
import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Sidebar />
        <BoardList boards = {props.boards} mutateState={props.mutateState} />
      </main>
    </>
  );
};

export default MainPage;
