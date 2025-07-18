import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PregariaDia1 from "./PregariaDia1";
import PregariaDia2 from "./PregariaDia2";
import PregariaDia3 from "./PregariaDia3";
import PregariaDia4 from "./PregariaDia4";

export default function Pregaria({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Pregària
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Pregària del Jubileu 2025
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <br /> Pare que esteu en el cel,
            <br />
            que la fe que ens heu donat
            <br />
            en el vostre Fill Jesucrist, el nostre germà,
            <br />i la flama de la caritat
            <br />
            que heu infós en els nostres cors
            <br />a través de l’Esperit Sant,
            <br />
            desvetllin en nosaltres
            <br />
            la benaurada esperança
            <br />
            en la vinguda del vostre Regne.
            <br />
            <br />
            Que la vostra gràcia ens transformi
            <br />
            en sembradors de les llavors de l’Evangeli
            <br />
            que fermentin la humanitat i la creació,
            <br />
            tot esperant confiadament
            <br />
            el cel nou i la terra nova
            <br />
            quan, vençudes les forces del mal,
            <br />
            es manifesti per sempre la vostra glòria.
            <br />
            <br />
            Que la gràcia del Jubileu
            <br />
            revifi en nosaltres, Pelegrins d’Esperança,
            <br />
            l’anhel pels béns eterns
            <br />i vessi sobre tot el món
            <br />
            la joia i la pau del nostre Redemptor.
            <br />A vós, Déu beneït per sempre,
            <br />
            sigui donada la lloança i la glòria
            <br />
            pels segles dels segles.
            <br />
            <br />
            Amén.
          </div>
        </AccordionDetails>
      </Accordion>
      {day == 1 && <PregariaDia1 />}
      {day == 2 && <PregariaDia2 />}
      {day == 3 && <PregariaDia3 />}
      {day == 4 && <PregariaDia4 />}
    </div>
  );
}
