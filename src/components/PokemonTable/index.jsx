import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typeHandler } from "../../utils";

export default function PokemonTable({ pokemonData }) {
  const { id, height, weight, types } = pokemonData;
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "fit-content", maxWidth: "250px", boxShadow: "none" }}
    >
      <Table size="small" aria-label="a dense table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>ID</TableCell>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>{"#" + id}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>Height</TableCell>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>{height + "cm"}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>Weight</TableCell>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>{weight + "g"}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}>{"Type"}</TableCell>
            <TableCell sx={{textTransform: "uppercase",  letterSpacing: 2, fontFamily: "PT Sans Narrow"}}>{typeHandler(types)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
