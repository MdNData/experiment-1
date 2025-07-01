import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
