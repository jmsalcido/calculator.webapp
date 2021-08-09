import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export const headerCells = [
    {id: "id", label: "Id"},
    {id: "uuid", label: "UUID"},
    {id: "type", label: "Service Type"},
    {id: "cost", label: "Cost"},
    {id: "status", label: "Status"},
];

export function AdminServiceRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `admin-service-table-${index}`;
    return (
        <React.Fragment>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                    {rowValues.id}
            </TableCell>
            <TableCell align="right">{rowValues.uuid}</TableCell>
            <TableCell align="right">{rowValues.type}</TableCell>
            <TableCell align="right">{rowValues.cost}</TableCell>
            <TableCell align="right">{rowValues.status}</TableCell>
        </React.Fragment>
    );
}

export default AdminServiceRow;

AdminServiceRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};