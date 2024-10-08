import { BrowserRouter, Route, Routes,  } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { PrivateRoute } from "./PrivateRoutes";

import { AuthLayout } from "../layouts/Auth";
import { DefaultLayout } from "../layouts/Default";
import { Categories } from "../pages/Categories";
import { Expenses } from "../pages/Expenses";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<AuthLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/categories" element={<AuthLayout />}>
            <Route index element={<Categories />} />
            <Route path=":id" element={<Categories />} />
          </Route>

          <Route path="/expenses" element={<AuthLayout />}>
            <Route index element={<Expenses />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export { Router };
