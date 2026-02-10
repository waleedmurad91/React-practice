import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import User from "./components/User";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <Contact />
        </div>
      ),
    },
    {
      path: "/user/:id",
      element: (
        <div>
          <Navbar />
          <User />
        </div>
      ),
    },
  ]);

  return (
    <div className="h-screen bg-slate-900 text-white flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
