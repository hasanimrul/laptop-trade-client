import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AllProducts from "../pages/AllProducts/AllProducts";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import MyOrders from "../pages/Dashboard/BuyerDashboard/MyOrders";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddAProduct from "../pages/Dashboard/SellerDashboard/AddAProduct";
import ManageProducts from "../pages/Dashboard/SellerDashboard/ManageProducts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><AllProducts /></PrivateRoute>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_SERVER_URL}/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'all-users',
                element: <AllUsers />
            },
            {
                path: 'add-products',
                element: <AddAProduct />,
            },
            {
                path: 'manage-products',
                element: <ManageProducts />,
            },
            {
                path: 'my-orders',
                element: <MyOrders />,
            },
            {
                path: 'payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_SERVER_URL}/booking/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])