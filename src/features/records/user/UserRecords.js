import { Input, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUserRecords } from "../recordsAPI";
import PaginationTable from "../../tables/PaginationTable";
import materialUiStyles from "../../../app/styles";
import UserRecordRow, {headerCells} from "./UserRecordRow";
import AuthComponent from "../../auth/AuthComponent";

function UserRecordsComponent() {
    const defaultInitialSize = 5;

    const classes = materialUiStyles();
    const [rows, setRows] = useState([]);
    const [serviceType, setServiceType] = useState("");
    const [size, setSize] = useState(defaultInitialSize);

    async function fetchData(serviceType, pageNumber, size) {
        const answer = await getUserRecords(serviceType, pageNumber, size);
        // TODO handle errors?
        setRows(answer.result);
    }

    useEffect(() => {
        fetchData("", 0, defaultInitialSize);
    }, []);

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

    return (
        <main>
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" gutterBottom>
                    User Records Dashboard
                </Typography>
                <br/>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Search by service type"
                    value={serviceType}
                    onChange={onChangeSearch}
                />
                <PaginationTable title="User Records" 
                    rows={rows}
                    rowElementType={UserRecordRow}
                    onChangePage={onChangePage}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPage={size}
                    cells={headerCells}/>
            </Paper>
        </main>
    )
}

export default function UserRecords() {
    return (
        <AuthComponent>
            <UserRecordsComponent />
        </AuthComponent>
    );
}