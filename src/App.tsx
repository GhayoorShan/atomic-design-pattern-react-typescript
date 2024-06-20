import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  );
}

export default App;
