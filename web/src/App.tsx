import { Router } from "./routes"
import { AuthProvider } from "./context/userContext";
import { GlobalStyle } from "./themes/styles/global";

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <Router />
  </AuthProvider>
);

export { App };
