import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Container } from "./styles";
import { StarrySky } from "../../components/molecules/StarrySky";

import { emitterMessage } from "../../libs/toastify/emitterMessage";

const SignUp = () => {
  const navigate = useNavigate();
  const { createAccount } = useAuth();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeNameValue = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onChangeEmailValue = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePasswordValue = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "")
      return emitterMessage("Occured an error to register", "error");

    try {
      await createAccount({ name, email, password });

      emitterMessage("Account created successfully", "success");

      navigate("/");
    } catch (error) {
      console.info(error);

      return emitterMessage("Occured an error to create account", "error");
    }
  };

  return (
    <div>
      <StarrySky />

      <Container>
        <div className="signup-container">
          <div className="signup-card">
            <h1>Sign Up</h1>

            <form>
              <input 
                type="text" 
                value={name}
                placeholder="Name" 
                onChange={onChangeNameValue} 
              />

              <input 
                type="email"
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

              <button onClick={handleClick}>Sign Up</button>

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
