import { Input, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import materialUiStyles from "../../app/styles";
import AdminComponent from "../auth/AdminComponent";
import PaginationTable from "../tables/PaginationTable";
import AdminUserBalanceDialog from "./AdminUserBalanceDialog";
import AdminUserBalanceRow, { headerCells } from "./AdminUserBalanceRow";
import { getUsers } from "./usersAPI";

function UserBalancesComponent() {

    const defaultInitialSize = 5;
    const classes = materialUiStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [userSelected, setUserSelected] = useState(null);
    const [rows, setRows] = useState([]);
    const [username, setUsername] = useState("");
    const [size, setSize] = useState(defaultInitialSize);

    async function fetchData(username, pageNumber, size) {
        const answer = await getUsers(username, pageNumber, size);
        // TODO handle errors?
        setRows(answer.result);
    }

    useEffect(() => {
        fetchData("", 0, defaultInitialSize);
    }, []);

    const onRowClick = (row) => {
        setUserSelected(row);
        setDialogOpen(true);
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

    const onCloseDialog = (receivedUser, deleted) => {
        if (deleted) {
            setRows(rows.filter((value) => {
                return value.id !== receivedUser.id;
            }));
        } else if (receivedUser) {
            setRows(rows.map((value) => {
                if (value.id === receivedUser.id) {
                    return receivedUser;
                }

                return value;
            }));
        }
        setDialogOpen(false);
    }

    return (
        <main>
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" gutterBottom>
                    User Balance Dashboard
                </Typography>
                <br/>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Search by username"
                    value={username}
                    onChange={onChangeSearch}
                />
                <PaginationTable title="User Balance" 
                    rows={rows}
                    rowElementType={AdminUserBalanceRow}
                    onRowClick={onRowClick}
                    onChangePage={onChangePage}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPage={size}
                    cells={headerCells}/>
            </Paper>
            <AdminUserBalanceDialog dialogOpen={dialogOpen} 
                onCloseDialog={onCloseDialog}
                userSelected={userSelected}
                />
        </main>
    );

}

export default function UserBalances() {
    return (
        <AdminComponent>
            <UserBalancesComponent />
        </AdminComponent>
    );   
}