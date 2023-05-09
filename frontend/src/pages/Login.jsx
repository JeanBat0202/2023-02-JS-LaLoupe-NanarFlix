import PropTypes from "prop-types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserId }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectionError, setConnectionError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id === undefined || data.id === null) {
          setConnectionError("Profile not found!");
        } else {
          setUserId(data.id);
          localStorage.setItem("id", data.id);
          navigate(`/profil/${data.id}`);
        }
      })
      .catch((error) => {
        setConnectionError("You must provide an email and a password!");
        console.error(error);
      });
  };

  return (
    <section className="flex  flex-col justify-center items-center text-white gap-5 my-20">
      <h2 className="text-3xl">Login</h2>
      <form
        onSubmit={login}
        className="flex flex-col justify-center items-center text-xl gap-5"
      >
        <label
          htmlFor="email"
          className="flex flex-col justify-center items-center"
        >
          Email:
          <input
            type="email"
            id="email"
            className="text-black w-60"
            onChange={handleEmail}
          />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col justify-center items-center"
        >
          Password:
          <input
            type="password"
            id="password"
            className="text-black w-60"
            onChange={handlePassword}
          />
        </label>
        <button
          type="submit"
          className="bg-white text-black rounded-xl w-auto p-2"
        >
          Log in
        </button>
        <small>{connectionError}</small>
      </form>
    </section>
  );
}

Login.propTypes = {
  setUserId: PropTypes.func,
};

Login.defaultProps = { setUserId: undefined };
