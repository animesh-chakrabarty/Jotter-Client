import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor/Editor";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import { useEffect } from "react";
import { setToken } from "./store/slices/tokenSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jotter-token");
    if (token) dispatch(setToken(token));
  }, []);

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
