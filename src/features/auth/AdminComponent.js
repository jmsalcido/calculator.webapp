import React from "react";
import { useSelector } from "react-redux";
import { logOut, selectUser } from "./authSlice";
import AuthComponent from "./AuthComponent";

export default function AdminComponent(props) {

    const user = useSelector(selectUser);
    
    const isLoggedIn = user !== null;
    const isAdmin = isLoggedIn && user.roles.includes("ROLE_ADMIN");

    if (!isAdmin) {
        logOut();
    }

    return (
        <AuthComponent>
            {props.children}
        </AuthComponent>
    );
}
