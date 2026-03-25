import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home,
            
        },
        {
            path: "/coverage",
            Component: Coverage,
            loader: ()=> fetch('/warehouses.json').then(res=> res.json())
        },
        {
            path: "/aboutUs",
            Component: AboutUs,
           
        },
        {
            path: "/rider",
            element: <PrivateRoute>
                <Rider></Rider>
            </PrivateRoute>
           
        },
        {
            path: "/sendParcel",
            element: <PrivateRoute>
                <SendParcel></SendParcel>
            </PrivateRoute>
           
        },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
        {
            path: 'signin',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        }
    ]
  }
]);