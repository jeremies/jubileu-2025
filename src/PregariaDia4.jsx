import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./biblija.scss";
import fillProdig from "./fill-prodig.jpeg";
import { Box } from "@mui/material";

export default function PregariaDia4() {
  return (
    <div>
      <h2>
        <strong>Pregàries dels Fidels:</strong>
      </h2>

      <p>
        <em>
          Germans i germanes, en aquest quart dia de pelegrinatge, des de la
          majestuosa Catedral d'Orvieto i sentint la misericòrdia de Déu tan a
          prop en aquest Any Sant, elevem les nostres súpliques.
        </em>
      </p>

      <ul>
        <li>
          <p>
            Pel Sant Pare i pel nostre bisbe Sergi: que el do de la indulgència
            els enforteixi en la seva missió de guiar l'Església a la
            purificació i a la plenitud en Crist.{" "}
            <strong>Preguem al Senyor.</strong>
          </p>
        </li>

        <li>
          <p>
            Per l'Església, que viu el Jubileu: que sigui un signe clar de la
            misericòrdia il·limitada de Déu, purificant els cors de tots els
            fidels. <strong>Preguem al Senyor.</strong>
          </p>
        </li>

        <li>
          <p>
            Pels qui necessiten sanació de les "cicatrius" del pecat: que l'amor
            de Jesús, que és la gran indulgència, els alliberi de tot residu i
            els permeti obrar amb més caritat.{" "}
            <strong>Preguem al Senyor.</strong>
          </p>
        </li>

        <li>
          <p>
            Pels pelegrins que hem recollit "de tot" en la nostra xarxa vital:
            que aquesta experiència de l'Any Sant ens convidi a destriar el que
            és bo del que no ho és per viure plenament en el Regne de Déu.{" "}
            <strong>Preguem al Senyor.</strong>
          </p>
        </li>

        <li>
          <p>
            Perquè la santedat de l'Església, a través de la comunió dels sants,
            beneficiï a tots els batejats, oferint-los el tresor espiritual que
            ens purifica. <strong>Preguem al Senyor.</strong>
          </p>
        </li>

        <li>
          <p>
            Perquè l'acollida de la indulgència ens porti a una conversió
            profunda, impulsant-nos a viure amb radicalitat les Obres de
            Misericòrdia. <strong>Preguem al Senyor.</strong>
          </p>
        </li>
      </ul>

      <p>
        <strong>
          Déu de misericòrdia infinita, que per Jesús, la nostra gran
          indulgència, ens purifiques de tot residu del pecat, acull les nostres
          pregàries. Concedeix-nos arribar a Roma amb els cors nets i oberts,
          disposats a rebre totes les benediccions d'aquest Any Sant. Per Crist
          Senyor Nostre. Amén.
        </strong>
      </p>
    </div>
  );
}
