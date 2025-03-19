import Listado from "./pages/Listado";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Listado />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
