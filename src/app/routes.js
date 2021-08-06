import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import history from "./history";

export function signIn() {
    history.push("/signIn");
};
