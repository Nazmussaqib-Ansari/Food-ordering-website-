import{BrowserRouter} from 'react-router'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ShopContextProvider from './components/Context/ShopContext.jsx';


createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
      
  </BrowserRouter>



      
);
