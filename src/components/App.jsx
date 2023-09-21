import React from "react";
import Main from "./Main";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./MainPage";
import Library from "./Library";
import Favorites from "./Favorites";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Instruction from "./Instruction";

import styles from "../styles.css";
import Description from "./Description";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<MainPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="home" element={<Home />}>
        <Route index element={<Instruction />} />
        <Route path="library" element={<Library />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="description" element={<Description />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
