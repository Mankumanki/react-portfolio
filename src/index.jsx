import React from "react";
import reactDom from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App";
import "../public/index.css";
import "../public/hero.css";
import "../public/WorkCard.css";
import "../public/footer.css";

const domNode = document.getElementById("root");
const root = reactDom.createRoot(domNode);

root.render(<App />);
