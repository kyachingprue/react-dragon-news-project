import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CategoryNews from "../components/CategoryNews";
import NewsCardDetails from "../components/NewsCardDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
      {
        path: '/category/news/:_id',
        element: <NewsCardDetails></NewsCardDetails>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params._id}`),
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '*',
    element: <h3>Page not found</h3>
  }
]);

export default router;