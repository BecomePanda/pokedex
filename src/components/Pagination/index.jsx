import * as React from "react";
import { Pagination, Stack, Typography } from "@mui/material";

export default function PokePagination({ getPokemons, count, currentPage, setCurrentPage }) {
  

  const handleChange = (event, value) => {
    getPokemons(value);
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          fontFamily: "PT Sans Narrow" ,
          letterSpacing: 2, 
        }}
      >
        Page - {currentPage}{" "}
      </Typography>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5}}
        count={count}
        variant="outlined"
        color="primary"
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
