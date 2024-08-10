import { Link } from "react-router-dom";

import { Container } from "./styles";
import { StarrySky } from "../../components/StarrySky";

const SignUp = () => {
  return (
    <div>
      <StarrySky />

      <Container>
        <div className="signup-container">
          <div className="signup-card">
            <h1>Sign Up</h1>

            <form>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />

              <button type="submit">Sign Up</button>

              <div className="row">
                <Link to="/">Log In</Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { SignUp };
