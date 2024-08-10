import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { StarrySky } from "../../components/StarrySky";
import { emitterMessage } from "../../libs/toastify/emitterMessage";

const SignUp = () => {
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

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "")
      return emitterMessage("Occured an error to register", "error");

    console.log({
      name,
      email,
      password
    });

    return emitterMessage("Success", "success");
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
