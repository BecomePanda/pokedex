import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { typeHandler } from "../../utils";
import { backgroundCaptalize } from "../../utils/backgroundCaptalize";
import { typeCaptalize } from "../../utils/typeCaptalize";

export default function PokemonCard({ name, image, types }) {
  return (
    <Card sx={{ maxWidth: 345, border: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 250 }}
          image={backgroundCaptalize(types)}
          title="pokemon"
        >
          <img
            style={{
              width: 250 + "px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src={image}
          ></img>
        </CardMedia>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ letterSpacing: 2, fontFamily: "PT Sans Narrow" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>

            <Chip
              sx={{
                backgroundColor: typeCaptalize(types),
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
              label={typeHandler(types)}
            />

            {/* <Chip
              sx={{
                backgroundColor: typeCaptalize(types),
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
              label={typeHandler(types)}
            /> */}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
