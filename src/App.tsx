import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToDosProvider } from "./contexts/todos.context";
import DefaultLayout from "./layouts/default.layout";
import HomePage from "./pages/HomePage";
import ToDoDetailPage from "./pages/ToDoDetailPage";

function App() {
  return (
    <ToDosProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos/:toDoId" element={<ToDoDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToDosProvider>
  );
}

export default App;
