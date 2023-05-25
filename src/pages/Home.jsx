import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/index";
import PokemonCard from "../components/PokemonCard/index";
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router";
import PokePagination from "../components/Pagination";

export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = (offset = 1) => {
    const limit = 24;
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          (offset - 1) * limit
        }`
      )
      .then((res) => {
        setPokemons(res.data.results);
        setCount(Math.floor(res.data.count / limit));
      });
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons(currentPage);
    }
    for (var i in pokemons) {
      if (
        pokemons[i].name.includes(name.charAt(0).toLowerCase() + name.slice(1))
      ) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  const pokemonPickHandler = (url) => {
    setPokemonData({ url });
    navigate("/profile");
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon.url)}>
                  <PokemonCard name={pokemon.name} url={pokemon.url} />
                </Box>
              </Grid>
            ))
          )}
        </Grid>
        <PokePagination
          getPokemons={getPokemons}
          count={count}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Box sx={{ pb: 4, marginTop: 1}}></Box>
      </Container>
    </div>
  );
};
