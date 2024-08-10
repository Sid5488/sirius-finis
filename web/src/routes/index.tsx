import { BrowserRouter, Route, Routes,  } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { PrivateRoute } from "./PrivateRoutes";

import { AuthLayout } from "../layouts/Auth";
import { DefaultLayout } from "../layouts/Default";

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export { Router };
