import './App.css';
import Home from './routes/Home';
import TaskDetails from './routes/TaskDetails'

import ErrorPage from './components/error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskdetails/:taskTitle",
    element: <TaskDetails />
  }])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
