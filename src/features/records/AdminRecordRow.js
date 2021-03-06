import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export const headerCells = [
    {id: "id", label: "Id"},
    {id: "uuid", label: "UUID"},
    {id: "username", label: "Username"},
    {id: "type", label: "Service Type"},
    {id: "cost", label: "Cost"},
    {id: "serviceResponse", label: "Service Response"},
    {id: "date", label: "Date"},
];

export function AdminRecordRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `admin-record-table-${index}`;
    return (
        <React.Fragment>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                    {rowValues.id}
            </TableCell>
            <TableCell align="right">{rowValues.uuid}</TableCell>
            <TableCell align="right">{rowValues.user.username}</TableCell>
            <TableCell align="right">{rowValues.service.type}</TableCell>
            <TableCell align="right">{rowValues.cost}</TableCell>
            <TableCell align="right">{rowValues.serviceResponse}</TableCell>
            <TableCell align="right">{rowValues.date}</TableCell>
        </React.Fragment>
    );
}

export default AdminRecordRow;

AdminRecordRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};