import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { captalize } from "../utils/captalize";
import axios from "axios";

export const Profile = ({ pokemonData }) => {
  const [loading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState({});
  const { url } = pokemonData || {};
  const navigate = useNavigate();

  const getPokemon = () => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    });
  };

  console.log({url, pokemonData});

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    } else {
      getPokemon();
    }
  }, []);

  if (!pokemonData) {
    return null;
  }

  if (loading) {
    return <CircularProgress size={25} />;
  }

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper sx={{ border: 1 }} elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
          >
            <Typography variant="h5">{captalize(pokemon.name)}</Typography>
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
                src={pokemon.sprites.front_default}
                width="50%"
              ></Box>
              <PokemonTable pokemonData={pokemon} />
            </Box>
            <Box width="100%">
              <Divider> Variations </Divider>
              <Box display="flex" justifyContent="space-between">
                <Box
                  component="img"
                  src={pokemon.sprites.front_female}
                  width="25%"
                  height="25%"
                ></Box>
                <Box
                  component="img"
                  src={pokemon.sprites.front_shiny}
                  width="25%"
                  height="25%"
                ></Box>
                <Box
                  component="img"
                  src={pokemon.sprites.front_shiny_female}
                  width="25%"
                  height="25%"
                ></Box>
              </Box>
              <Divider> Moves </Divider>
              <Box textAlign="center" marginTop="15px">
                {pokemon.moves.map((moveData, key) => (
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
