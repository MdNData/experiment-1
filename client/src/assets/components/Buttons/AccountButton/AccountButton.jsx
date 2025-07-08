import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useAppContext } from "../../../../context";

const AccountButton = () => {
  const user = undefined;
  const destination = user ? "/account" : "/login";
  const { width } = useAppContext();

  return (
    <div className="account-button">
      {width > 960 ? (
        user ? (
          <Link to={destination}>
            <FiUser />
            <span>Account </span>
          </Link>
        ) : (
          <Link to={destination}>
            <FiUser />
            <span>Login</span>
          </Link>
        )
      ) : (
        <Link to={destination}>
          <FiUser /></Link>
      )}
    </div>
  );
};

export default AccountButton;
