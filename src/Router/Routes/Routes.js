import Main from "../../Layout/Main";
import Addservice from "../../Pages/Addservice/Addservice";
import Blog from "../../Pages/Blog/Blog";

import Details from "../../Pages/checkoutReview/Details";

import Home from "../../Pages/Home/Home/Home";

import LinkReview from "../../Pages/Home/Home/Services/LinkReview";
import Service from "../../Pages/Home/Home/Services/Service";


import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://the-flytographer-server.vercel.app/services/${params.id}`),
            },
            {
                path: '/review',
                element: <Review></Review>,

            },


            {
                path: '/addservice',
                element: <PrivateRoute><Addservice></Addservice></PrivateRoute>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>,

            },
            {
                path: '/linkreview/:id',
                element: <LinkReview></LinkReview>,
                loader: ({ params }) => fetch(`https://the-flytographer-server.vercel.app/orders/${params.id}`),

            },

            {
                path: '*', element: <div className="text-center text-5xl ">This route is not founded</div>
            }


        ]

    }

])

export default router;