import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Chip } from "@mui/material";
import { typeCaptalize } from "../../utils/typeCaptalize";

function ChipType({ types }) {
  return types.map((type) => (
    <Chip
      sx={{
        display: "flex",
        backgroundColor: typeCaptalize(type.type),
        border: 2,
        borderColor: "black",
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
        fontFamily: "PT Sans Narrow",
        textShadow:
          "2px 2px 4px rgba(0, 0, 0, 1), -2px -2px 4px rgba(0, 0, 0, 1)",
      }}
      variant="filled"
      label={type.type.name}
    />
  ));
}

export default function PokemonTable({ pokemonData }) {
  const { id, height, weight } = pokemonData;
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "fit-content", maxWidth: "300px", boxShadow: 3 }}
    >
      <Table size="small">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                backgroundColor: "black",
                color: "#FFF",
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {"#" + id}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                backgroundColor: "black",
                color: "#FFF",
              }}
            >
              Height
            </TableCell>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {height + "dm"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                backgroundColor: "black",
                color: "#FFF",
              }}
            >
              Weight
            </TableCell>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {weight + "hg"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
                backgroundColor: "black",
                color: "#FFF",
              }}
            >
              {"Type"}
            </TableCell>
            <TableCell
              sx={{
                textTransform: "uppercase",
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <ChipType types={pokemonData.types} />
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
