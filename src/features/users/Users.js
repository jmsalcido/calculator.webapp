import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import materialUiStyles from "../../app/styles";
import AdminComponent from "../auth/AdminComponent";
import PaginationTable from "../tables/PaginationTable";
import { headerCells, AdminUserRow } from "./AdminUserRow";
import { getUsers } from "./usersAPI";

function UsersComponent(props) {

    const classes = materialUiStyles();
    const [rows, setRows] = useState([]);
    const [username, setUsername] = useState("");
    const [size, setSize] = useState(5);

    async function fetchData(username, pageNumber, size) {
        const answer = await getUsers(username, pageNumber, size);
        // TODO handle errors?
        setRows(answer.result);
    }

    useEffect(() => {
        fetchData("", 0, size);
    }, []);

    const onRowClick = (row) => {
        console.log("click from Users, open modal here.", row);
    };

    const onChangePage = (pageNumber) => {
        fetchData(username, pageNumber, size);
    };

    const onRowsPerPageChange = (pageSize) => {
        setSize(pageSize);
        fetchData(username, 0, pageSize);
    };

    const onChangeSearch = (e) => {
        const username = e.target.value;
        setUsername(username);
        fetchData(username, 0, size);
    }

    return (
        <main>
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" gutterBottom>
                    Users Dashboard
                </Typography>
                <br/>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by username"
                    value={username}
                    onChange={onChangeSearch}
                />
                <PaginationTable title="Users" 
                    rows={rows}
                    rowElementType={AdminUserRow}
                    onRowClick={onRowClick}
                    onChangePage={onChangePage}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPage={size}
                    cells={headerCells}/>
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
