import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export const headerCells = [
    {id: "id", label: "ID"},
    {id: "username", label: "Username"},
    {id: "uuid", label: "UUID"},
    {id: "role", label: "Role"},
    {id: "status", label: "Status"},
];

export function AdminUserRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `admin-user-table-${index}`;
    return (
        <React.Fragment>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                    {rowValues.id}
            </TableCell>
            <TableCell align="right">{rowValues.username}</TableCell>
            <TableCell align="center">{rowValues.uuid}</TableCell>
            <TableCell align="right">{rowValues.role}</TableCell>
            <TableCell align="right">{rowValues.status}</TableCell>
        </React.Fragment>
    );
}

export default AdminUserRow;

AdminUserRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};