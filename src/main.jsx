import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/style/style.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>
  </BrowserRouter>
);
