import { Input, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import AdminComponent from "../auth/AdminComponent";
import PaginationTable from "../tables/PaginationTable";

import materialUiStyles from "../../app/styles";
import AdminRecordRow, { headerCells } from "./AdminRecordRow";
import { getRecords } from "./recordsAPI";
import AdminRecordDialog from "./AdminRecordDialog";

function RecordsComponent() {
    const defaultInitialSize = 5;

    const classes = materialUiStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [recordSelected, setRecordSelected] = useState(null);
    const [rows, setRows] = useState([]);
    const [serviceType, setServiceType] = useState("");
    const [size, setSize] = useState(defaultInitialSize);

    async function fetchData(serviceType, pageNumber, size) {
        const answer = await getRecords(serviceType, pageNumber, size);
        // TODO handle errors?
        setRows(answer.result);
    }

    useEffect(() => {
        fetchData("", 0, defaultInitialSize);
    }, []);

    const onRowClick = (row) => {
        setRecordSelected(row);
        setDialogOpen(true);
    };

    const onChangePage = (pageNumber) => {
        fetchData(serviceType, pageNumber, size);
    };

    const onRowsPerPageChange = (pageSize) => {
        setSize(pageSize);
        fetchData(serviceType, 0, pageSize);
    };

    const onChangeSearch = (e) => {
        const serviceType = e.target.value;
        setServiceType(serviceType);
        fetchData(serviceType, 0, size);
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
                    Records Dashboard
                </Typography>
                <br/>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Search by service type"
                    value={serviceType}
                    onChange={onChangeSearch}
                />
                <PaginationTable title="Services" 
                    rows={rows}
                    rowElementType={AdminRecordRow}
                    onRowClick={onRowClick}
                    onChangePage={onChangePage}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPage={size}
                    cells={headerCells}/>
            </Paper>
            <AdminRecordDialog dialogOpen={dialogOpen} 
                onCloseDialog={onCloseDialog}
                recordSelected={recordSelected}
            />
        </main>
    )
}

export default function Records() {
    return (
        <AdminComponent>
            <RecordsComponent />
        </AdminComponent>
    );
}