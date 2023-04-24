import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";


const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/home"/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/post',
                element: <Post/>
            }
        ]
    }
]);

export default router;