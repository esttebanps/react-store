import Button from "../button/Button";
import { MyContext } from "../provider/Provider";
import { useState, useContext } from "react";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin, setIsAuthenticated } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setIsAuthenticated(true)
  };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
             className="border border-gray-600 rounded-lg h-10 px-2"       
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-600 rounded-lg h-10 px-2"
          />
          {password}
          {email}
        </label>
        <Button text="Iniciar sesion" />
        
      </form>
    );
}

export default LoginForm;