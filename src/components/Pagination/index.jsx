import * as React from "react";
import { Pagination, Stack, Typography } from "@mui/material";

export default function PokePagination({ getPokemons, count }) {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    getPokemons(value);
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        Page - {page}{" "}
      </Typography>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5, }}
        count={count}
        variant="outlined"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
