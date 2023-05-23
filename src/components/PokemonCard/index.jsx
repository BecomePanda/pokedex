import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, CircularProgress, Divider } from "@mui/material";
import { backgroundCaptalize } from "../../utils/backgroundCaptalize";
import { typeCaptalize } from "../../utils/typeCaptalize";
import axios from "axios";

function ChipType({ types }) {
  return types.map(
    (type) => (
      console.log(type),
      (
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
      )
    )
  );
}

export default function PokemonCard({ name, url }) {
  const [pokemon, setPokemon] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPokemon();
  }, [name]);
  const getPokemon = () => {
    setLoading(true);
    axios.get(url).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    });
  };

  if (loading) {
    return <CircularProgress size={25} />;
  }

  return (
    <Card sx={{ maxWidth: 345, border: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 250 }}
          image={backgroundCaptalize(pokemon.types)}
          title="pokemon"
        >
          <img
            style={{
              width: 250 + "px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src={pokemon.sprites.front_default}
          ></img>
        </CardMedia>
        <CardContent>
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Typography
              sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow", textTransform: 'capitalize' }}
              gutterBottom
              variant="h5"          
              component="div"
            >
              {name}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}>
            <ChipType types={pokemon.types} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
