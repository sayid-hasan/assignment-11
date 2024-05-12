import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return (
      <>
        <CircularProgress color="secondary" />
      </>
    );
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
