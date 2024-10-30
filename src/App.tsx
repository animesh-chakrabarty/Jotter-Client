import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor/Editor";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="h-full w-full">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
