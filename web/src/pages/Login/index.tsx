import { Link } from "react-router-dom";

import { Container } from "./styles";
import { StarrySky } from "../../components/StarrySky";

const Login = () => {
  return (
    <div>
      <StarrySky />

      <Container>
        <div className="login-container">
          <div className="login-card">
            <h1>Log In</h1>

            <form>
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />

              <button type="submit">Log In</button>

              <div className="row">
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Login };
