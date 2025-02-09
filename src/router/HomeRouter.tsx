import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManegement } from "../components/pages/UserManagement";


export const homeRoutes = [
    // {
    //     index: true, // /home にアクセスした時に Home を表示
    //     element: <Home />,
    // },
    {
        path: "user_management", // /home/user_management
        element: <UserManegement />,
    },
    {
        path: "setting", // /home/setting
        element: <Setting />,
    },
    {
        path: "*", // 404ページ
        element: <Page404 />,
    },
]