import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/user";

const Component = ({ children, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return children;
};

const states = ({ userStore }) => {
  const { data: user } = userStore;

  return {
    user,
  };
};

export default connect(states)(Component);
