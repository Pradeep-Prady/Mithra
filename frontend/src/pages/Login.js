import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { useLocation, useNavigate } from "react-router-dom";
import { loadUser, login } from "../actions/authActions";
import store from './../store';
import { clearError } from "../slices/authSlice";
 
export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { error, isAuthenticated } = useSelector((state) => state.authState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const redirect = location.search
    ? "/" + location.search.split("=")[1]
    : "/admin";

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

    if (error) {
      dispatch(clearError());

      return;
    }
  }, [error, isAuthenticated, dispatch, navigate, redirect]);
  return (
    <div className="w-full h-screen bg-mywhite flex fixed z-50 left-0 top-0 bottom-0 items-center justify-center">
      <div className="w-4/12">
        <form className="border py-5 px-10 w-full " onSubmit={submitHandler}>
          <div className="my-2">
            <p className="my-2 select-none">User Name</p>
            <input
              className="px-2 w-full py-1.5 outline-none "
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div className="my-2">
            <p className="my-2 select-none">Password</p>
            <input
              className="px-2 w-full py-1.5 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="flex items-center w-full justify-center my-3">
            <button className="bg-myblue text-mywhite px-5 rounded-sm py-1.5 select-none cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
