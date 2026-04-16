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
import DashboadLayout from "../layouts/DashboadLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentSuccess from "../pages/Dashboard/payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/payment/PaymentCancel";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";
import RiderApplications from "../pages/Dashboard/RiderApplications/RiderApplications";

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
            </PrivateRoute>,
            loader: ()=> fetch('/warehouses.json').then(res=> res.json())
           
        },
        {
            path: "/sendParcel",
            element: <PrivateRoute>
                <SendParcel></SendParcel>
            </PrivateRoute>,
            loader: ()=> fetch('/warehouses.json').then(res=> res.json())
           
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
  },
  {
    path: 'dashboard',
    element: <PrivateRoute>
        <DashboadLayout></DashboadLayout>
    </PrivateRoute>,
    children:[
        {
            path: 'my-parcels',
            Component: MyParcels
        },
        {
            path: 'payment/:parcelId',
            Component: Payment  
        },
        {
            path: 'payment-success',
            Component: PaymentSuccess  
        },
        {
            path: 'payment-cancelled',
            Component: PaymentCancel  
        },
        {
            path: 'payment-history',
            Component: PaymentHistory  
        },
        {
            path: 'rider-applications',
            Component: RiderApplications  
        },
    ]
  }
]);