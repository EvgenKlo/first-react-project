import React from "react";
import './styles/app.css'
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <RouterProvider>
      <Routes>
        <Route
          path="/about"
          element={<About/>}
        >
        </Route>
        <Route
          path="/posts"
          element={<Posts/>}
        >
        </Route>
      </Routes>
    </RouterProvider>
  )
}

export default App;
