import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export const headerCells = [
    {id: "uuid", label: "UUID"},
    {id: "username", label: "Username"},
    {id: "role", label: "Role"},
    {id: "userBalance", label: "User Balance"},
];

export function AdminUserBalanceRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `admin-user-balance-table-${index}`;
    return (
        <React.Fragment>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                    {rowValues.uuid}
            </TableCell>
            <TableCell align="right">{rowValues.username}</TableCell>
            <TableCell align="right">{rowValues.role}</TableCell>
            <TableCell align="right">{rowValues.userBalance}</TableCell>
        </React.Fragment>
    );
}

export default AdminUserBalanceRow;

AdminUserBalanceRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};