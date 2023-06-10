import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const pass = "amann";
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (password === pass) {
      localStorage.setItem("isLogged", true);
      navigate("/");
    } else {
      alert("Wrong Password");
      setPassword("");
    }
  };
  return (
    <>
      <Header />
      <div className="grid place-items-center w-[100vw] h-[90vh]">
        <div className="flex flex-col space-y-5 bg-zinc-600 rounded-md p-2">
          <input
            type="password"
            placeholder="Enter the password"
            className="p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 bg-red-400 text-2xl rounded-sm"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
