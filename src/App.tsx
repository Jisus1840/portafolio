import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Project from './Project';
import Social from './Social';

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
  },
  {
    path: "/projects",
    element: <Project />,
    // loader: rootLoader,
  },
  {
    path: "/social",
    element: <Social />,
    // loader: rootLoader,
  },
]);


function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;