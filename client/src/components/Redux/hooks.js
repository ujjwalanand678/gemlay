// src/hooks.js
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { store } from "../Redux/store.js";
import * as authActions from "./features/auth/authSlice";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

// optional: handy bound actions
export const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActions, dispatch);
};
