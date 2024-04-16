import React from "react";
import { Link } from "react-router-dom";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const Faults = ({ data }) => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#e0e8f9", padding: "8px 0", margin: '2px', borderRadius: '8px' }}>
        <Typography component="h1" variant="h5" align="center" style={{ color: "#647acb" }}>
          Motors
        </Typography>
      </div>
      <div style={{ overflowX: "auto", border: '1px solid #d3d3d3', borderRadius: '8px', margin: '2px' }}>
        <Table style={{ minWidth: "100%", borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#ff8500", color: "#fff" }}>
              <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px', fontWeight: 'bold' }}>Motor ID</TableCell>
              <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px', fontWeight: 'bold' }} align="right">Motor Status</TableCell>
              <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px', fontWeight: 'bold' }} align="right">Motor Type</TableCell>
              <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px', fontWeight: 'bold' }} align="right">Created At</TableCell>
              <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px', fontWeight: 'bold' }} align="right">HealthCard</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#fff" }}>
                <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px' }} component="th" scope="row">{row._id}</TableCell>
                <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px' }} align="right">{row.motorStatus}</TableCell>
                <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px' }} align="right">{row.motorType}</TableCell>
                <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px' }} align="right">{row.createdAt}</TableCell>
                <TableCell style={{ border: '1px solid #d3d3d3', padding: '8px' }} align="right">
                  <Link to={`/healthCard/${row._id}`} style={{ color: "#651fff", textDecoration: "none" }}>HealthCard</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}

export default Faults;
