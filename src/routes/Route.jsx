import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ErrorPage from "../pages/Error/ErrorPage";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default Route;
