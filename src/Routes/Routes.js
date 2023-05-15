import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddLawyer from "../Pages/Dashboard/AddLawyer/AddLawyer";
import ManageLawyers from "../Pages/Dashboard/ManageLawyers/ManageLawyers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import CompletedPayments from "../Pages/Dashboard/CompletedPayments/CompletedPayments";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },    
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: '/dashboard/addlawyer',
                element: <AdminRoute><AddLawyer/></AdminRoute>
            },
            {
                path: '/dashboard/managelawyers',
                element: <AdminRoute><ManageLawyers/></AdminRoute>
            },
            {
                path: '/dashboard/completedpayments',
                element: <CompletedPayments/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`http://localhost:5000/reserves/${params.id}`)
            }
        ]
    }
])