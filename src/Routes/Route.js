import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AllProducts from "../pages/AllProducts/AllProducts";
import Blog from "../pages/Blog/Blog";
import AllBuyers from "../pages/Dashboard/AdminDashboard/AllBuyers";
import AllSellers from "../pages/Dashboard/AdminDashboard/AllSellers";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import MyOrders from "../pages/Dashboard/BuyerDashboard/MyOrders";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddAProduct from "../pages/Dashboard/SellerDashboard/AddAProduct";
import ManageProducts from "../pages/Dashboard/SellerDashboard/ManageProducts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
                path: '/blog',
                element: <Blog />
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
                path: 'all-seller',
                element: <AdminRoute><AllSellers /></AdminRoute>
            },
            {
                path: 'all-buyer',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: 'add-products',
                element: <SellerRoute><AddAProduct /></SellerRoute>,
            },
            {
                path: 'manage-products',
                element: <SellerRoute><ManageProducts /></SellerRoute>,
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