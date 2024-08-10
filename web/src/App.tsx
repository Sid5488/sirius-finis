import { ToastContainer } from "react-toastify";

import { Router } from "./routes"
import { AuthProvider } from "./context/userContext";
import { GlobalStyle } from "./themes/styles/global";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <Router />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </AuthProvider>
);

export { App };
