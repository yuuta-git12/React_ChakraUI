import { memo,FC } from "react";
import { Routes,Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRouter";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* /home ルートの設定 */}
            <Route path="/home">
                {/* /home のみ Home を表示 */}
                <Route index element={<Home />} />
                
                {/* /home 以下のルート */}
                {homeRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
});