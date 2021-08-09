import { Input, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import AdminComponent from "../auth/AdminComponent";
import PaginationTable from "../tables/PaginationTable";

import { getServices } from "./servicesAPI";

import materialUiStyles from "../../app/styles";
import AdminServiceDialog from "./AdminServiceDialog";
import AdminServiceRow, { headerCells } from "./AdminServiceRow";

function ServicesComponent() {
    const defaultInitialSize = 5;

    const classes = materialUiStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [serviceSelected, setServiceSelected] = useState(null);
    const [rows, setRows] = useState([]);
    const [serviceType, setServiceType] = useState("");
    const [size, setSize] = useState(defaultInitialSize);

    async function fetchData(serviceType, pageNumber, size) {
        const answer = await getServices(serviceType, pageNumber, size);
        // TODO handle errors?
        setRows(answer.result);
    }

    useEffect(() => {
        fetchData("", 0, defaultInitialSize);
    }, []);

    const onRowClick = (row) => {
        setServiceSelected(row);
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
                    Services Dashboard
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
                    rowElementType={AdminServiceRow}
                    onRowClick={onRowClick}
                    onChangePage={onChangePage}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPage={size}
                    cells={headerCells}/>
            </Paper>
            <AdminServiceDialog dialogOpen={dialogOpen} 
                onCloseDialog={onCloseDialog}
                serviceSelected={serviceSelected}
            />
        </main>
    )
}

export default function Services() {
    return (
        <AdminComponent>
            <ServicesComponent />
        </AdminComponent>
    );
}