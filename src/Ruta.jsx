import * as React from "react";
import Typography from "@mui/material/Typography";
import pisa from "./pisa.avif";
import siena from "./siena.avif";
import florencia from "./florencia.avif";
import { Box } from "@mui/material";

export default function Ruta({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Per a la ruta
      </Typography>
      {day == 1 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Abraham és el pare en la fe. Pensa que va començar el seu
            pelegrinatge «sortint de casa seva». Com surto de casa meva a la
            recerca dels altres? Evito caure en la temptació de quedar-me en la
            meva «zona de confort»? Com la supero?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Quin és el camí que Déu t’ha convidat a recorrer en la teva vida?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={pisa} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Torre de Pisa
            </Typography>
          </Box>
        </>
      )}
      {day == 2 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            a) no hi ha títol més gran que el de «ser fill». Com ho vius? Què
            significa per a tu? Comparteix la teva resposta amb un company de
            recés.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            b) et sents fracassat en alguna dimensió essencial de la teva vida?
            Per què? Comparteix-ho amb el teu acompanyant.
          </Typography>{" "}
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            c) quines són les temptacions «d’abandonar la teva fe» o de «no
            viure-la a fons»? repassa-les mentre camines.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={siena} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Siena
            </Typography>
          </Box>
        </>
      )}
      {day == 3 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - En quin lloc t’agradaria romandre «per sempre»? Quina és, en el
            fons, la teva vocació? Què té preparat Déu per a tu? Imagina-ho...
            comparteix-ho amb el teu acompanyant, si t’ajuda.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - quina és «la teva vocació personal»?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={florencia} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Florència
            </Typography>
          </Box>
        </>
      )}
    </div>
  );
}
