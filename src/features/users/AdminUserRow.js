import React from "react";
import PropTypes from 'prop-types';

import { TableCell } from "@material-ui/core";

export default function AdminUserRow(props) {
    const rowValues = props.rowValues;
    const index = props.index;
    const labelId = `enhanced-table-checkbox-${index}`;
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

AdminUserRow.propTypes = {
    rowValues: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};