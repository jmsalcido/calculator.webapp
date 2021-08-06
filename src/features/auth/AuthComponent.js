import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./authSlice";
import { signIn } from "../../app/routes";

export default function AuthComponent(props) {
    const user = useSelector(selectUser);

    if (!user) {
        signIn();
        return null;
    }

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}
