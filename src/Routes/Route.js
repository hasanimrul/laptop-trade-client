import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddAProduct from "../pages/Dashboard/SellerDashboard/AddAProduct";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

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
                path: '/add-products',
                element: <AddAProduct />,
            },
            {
                path: '/category/:id',
                element: <AllProducts />,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_SERVER_URL}/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])