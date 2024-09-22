import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Container } from "./styles";
import { StarrySky } from "../../components/StarrySky";

import { emitterMessage } from "../../libs/toastify/emitterMessage";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmailValue = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePasswordValue = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === "" || password === "")
      return emitterMessage("Occured an error to register", "error");

    try {
      await login({ email, password });

      emitterMessage("Login successfully", "success");

      navigate("/home");
    } catch (error) {
      console.info(error);

      return emitterMessage("Email/password incorrect!", "error");
    }
  };

  return (
    <div>
      <StarrySky />

      <Container>
        <div className="login-container">
          <div className="login-card">
            <h1>Log In</h1>

            <form>
              <input 
                type="text"
                value={email}
                placeholder="Email"
                onChange={onChangeEmailValue}
              />
              <input 
                type="password"
                value={password} 
                placeholder="Password"
                onChange={onChangePasswordValue}
              />

              <button onClick={handleClick}>Log In</button>

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
