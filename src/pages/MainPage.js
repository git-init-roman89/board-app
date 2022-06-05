import { BoardList, Header, Sidebar } from "../components/index";
import "./MainPage.scss";

const MainPage = () => {

  return (
    <>
      <Header />
      <main className="main-container">
        <Sidebar />
        <BoardList />
      </main>
    </>
  );
};

export default MainPage;
