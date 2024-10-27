import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "@/components"
import { Assessment, Business, Dashboard, Declaration, Payment, YourApplication } from "@/pages";

export default function AppRoutes() {
 const routes = [
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
            {
                path: "yourapplication",
                element: <YourApplication/>,
            },
            {
                path: "/business",
                element: <Business/>
            },
            {
                path: "/personal",
                element: <YourApplication/>
            },
            {
                path: "/declaration",
                element: <Declaration/>
            },
            {
                path: "/assessment",
                element: <Assessment/>
            },
            {
                path: "/payment",
                element: <Payment/>
            }
        ]
    }
    
 ];
    const router = createBrowserRouter (routes)
    return <RouterProvider router={router}/>
}
