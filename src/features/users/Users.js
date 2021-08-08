import React from "react";
import { Paper, Typography } from "@material-ui/core";
import materialUiStyles from "../../app/styles";
import AdminComponent from "../auth/AdminComponent";
import PaginationTable from "../tables/PaginationTable";
import AdminUserRow from "./AdminUserRow";

function UsersComponent(props) {

    const classes = materialUiStyles();

    const rows = [
        {
            username: "jose",
            uuid: "493c585b-2dea-4036-8513-b7195c363000",
            role: "admin",
            status: "ACTIVE",
            userBalance: 1000,
        },
        {
            username: "jose2",
            uuid: "493c585b-2dea-4036-8513-b7195c363000",
            role: "user",
            status: "ACTIVE",
            userBalance: 50,
        }
    ];

    const cells = [
        {id: "username", label: "Username"},
        {id: "uuid", label: "UUID"},
        {id: "role", label: "Role"},
        {id: "status", label: "Status"},
        {id: "userBalance", label: "User Balance"},
    ];

    return (
        <main>
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" gutterBottom>
                    Users Dashboard
                </Typography>
                <br/>
                <PaginationTable title="Users" 
                    rows={rows} 
                    rowElementType={AdminUserRow}
                    cells={cells}/>
            </Paper>
        </main>
    )
}

export default function Users() {
    return (
        <AdminComponent>
            <UsersComponent />
        </AdminComponent>
    );
}
