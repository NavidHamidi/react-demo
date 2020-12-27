import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li><a onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </a></li>
  );
};

export default LogoutButton;