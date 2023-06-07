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
import axios from "axios";
import Pokeico from "../assets/pokeico.png";

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
        <Paper sx={{border: 1}} elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
          >
            <Typography
              variant="h5"
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
              >
                <img style={{ width: 30, marginRight: 10 }} src={Pokeico}></img>
                {pokemon.name}
              </Box>
            </Typography>
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
            <Box
              width="100%"
              sx={{
                letterSpacing: 2,
                fontFamily: "PT Sans Narrow",
                textTransform: "capitalize",
              }}
            >
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
                    sx={{
                      m: "5px",
                      fontFamily: "PT Sans Narrow",
                      letterSpacing: 2,
                      textTransform: "capitalize",
                    }}
                    label={moveData.move.name}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ pb: 4, marginTop: 1}}></Box>
      </Container>
    </>
  );
};
