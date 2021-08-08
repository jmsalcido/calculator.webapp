import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./authSlice";
import AuthComponent from "./AuthComponent";
import { signIn } from "../../app/routes";

export default function AdminComponent(props) {

    const user = useSelector(selectUser);
    
    const isLoggedIn = user !== null;
    const isAdmin = isLoggedIn && user.roles.includes("ROLE_ADMIN");

    if (!isAdmin) {
        signIn();
        return null;
    }

    return (
        <AuthComponent>
            {props.children}
        </AuthComponent>
    );
}
