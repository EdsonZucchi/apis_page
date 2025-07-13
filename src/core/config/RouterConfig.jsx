import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../../modules/home/page/HomePage";


export const RouterConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<HomePage/>}></Route>
        </Routes>
    </BrowserRouter>    
  );
};
