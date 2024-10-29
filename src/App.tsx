import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor/Editor";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="h-full w-full ">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </main>
  );
};

export default App;
