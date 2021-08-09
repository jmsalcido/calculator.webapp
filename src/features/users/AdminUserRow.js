import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export const headerCells = [
    {id: "username", label: "Username"},
    {id: "uuid", label: "UUID"},
    {id: "role", label: "Role"},
    {id: "status", label: "Status"},
    {id: "userBalance", label: "User Balance"},
];

export function AdminUserRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `admin-user-table-${index}`;
    return (
        <React.Fragment>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                    {rowValues.username}
            </TableCell>
            <TableCell align="right">{rowValues.uuid}</TableCell>
            <TableCell align="right">{rowValues.role}</TableCell>
            <TableCell align="right">{rowValues.status}</TableCell>
            <TableCell align="right">{rowValues.userBalance}</TableCell>
        </React.Fragment>
    );
}

export default AdminUserRow;

AdminUserRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};