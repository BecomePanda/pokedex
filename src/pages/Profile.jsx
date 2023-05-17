import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { captalize } from "../utils/captalize";

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, []);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
          >
            <Typography variant="h5">{captalize(name)}</Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box
                component="img"
                src={sprites.front_default}
                width="50%"
              ></Box>
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider> Variations </Divider>
              <Box display="flex" justifyContent="space-between">
                <Box
                  component="img"
                  src={sprites.front_female}
                  width="25%"
                  height="25%"
                ></Box>
                <Box
                  component="img"
                  src={sprites.front_shiny}
                  width="25%"
                  height="25%"
                ></Box>
                <Box
                  component="img"
                  src={sprites.front_shiny_female}
                  width="25%"
                  height="25%"
                ></Box>
              </Box>
              <Divider> Moves </Divider>
              <Box textAlign="center" marginTop="15px">
                {moves.map((moveData, key) => (
                  <Chip
                    key={key}
                    sx={{ m: "5px" }}
                    label={captalize(moveData.move.name)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
