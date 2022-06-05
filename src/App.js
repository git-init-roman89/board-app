import { MainPage, BoardPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
      <Routes>
        <Route index path="/" element={<MainPage />}>

        </Route>
        <Route path="demoboard">
            <Route path=":id" element={<BoardPage />} />
          </Route>
      </Routes>
  );
};

export default App;
