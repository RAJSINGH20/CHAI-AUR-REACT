import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Project_2/Layout/Layout.jsx";
import Home from "./Components/Project_2/Home/Home.jsx";
import About from "./Components/Project_2/About/About.jsx";

import { Route } from "react-router-dom";

import Project from "./Components/Project_2/Projects/Project.jsx";
import Bg_changer from "./Components/Bg_changer.jsx";
import Pass_gen from "./Components/Pass_gen.jsx";
import Counter from "./Components/Counter.jsx";
import Card from "./Components/Card.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "User",
//         element: <User />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Project/>} />
      <Route path="Projects" element={<Project/>} />
      <Route path="bg-changer" element={<Bg_changer/>} />
      <Route path="password-gen" element={<Pass_gen/>} />
      <Route path="counter" element={<Counter/>} />
      <Route path="bg-changer" element={<Bg_changer/>} />
      <Route path="card" element={<Card/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <App/>  
  
);
