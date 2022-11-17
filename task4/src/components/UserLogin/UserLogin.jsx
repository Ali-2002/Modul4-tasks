import React from "react";
import './UserLogin.css'
const UserLogin = () => {
  return (
    <div>
      <form action="">
        <label>
          Mail:
          <br />
          <input
            type="email"
            required
            pattern=".+@[a-z0-9.-]+.ru"
            title=".ru ile daxil edin"
          />
        </label>
        <label>
          Password:
          <br />
          <input type="password" required minLength="8" />
        </label>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default UserLogin;
