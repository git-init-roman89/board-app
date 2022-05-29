import {MainPage, BoardPage} from "./pages/index";
import initialState from "./state/state";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import './App.scss';

const App = (props) => {
  const [state, setState] = useState(initialState);

  const mutateState = (values) => {
    setState(values)
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage state = {state} mutateState={mutateState} />} />
      <Route path="demoboard/:id" element={<BoardPage state={state} />} />
    </Routes>
    </>
  );
}

export default App;
