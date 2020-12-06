import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Navigation() {
  return (
    <div>
      <NavLink to="/diary">
        <Logo />
      </NavLink>
    </div>
  );
}

export default Navigation;
