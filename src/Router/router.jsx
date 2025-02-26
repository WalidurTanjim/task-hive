import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Page404 from "../Components/Page404";
import LoginPage from "../Pages/LoginPage";
import TaskBoard from "../Pages/TaskBoard";
import Home from "../Pages/Home/Home";
import ProfileList from "../Landing/ProfileList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/",
    element:<PrivateRoute> <Mainlayout></Mainlayout></PrivateRoute>,
    errorElement: <Page404></Page404>,

    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/taskboard",
        element: <TaskBoard></TaskBoard>
      },
      {
        path: "/profile",
        element: <ProfileList></ProfileList>
      },


    ]
  },
]);

export default router;