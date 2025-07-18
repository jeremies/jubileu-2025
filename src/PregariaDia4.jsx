import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./biblija.scss";
import fillProdig from "./fill-prodig.jpeg";
import { Box } from "@mui/material";

const evangeli = `
<table class="biblija" width="100%">
<tbody><tr class="tr-odd">
<td class="text" width="100%" valign="bottom">
<div class="p"> 
<span class="v">9&nbsp;</span>(...) Fugiu del mal, abraceu-vos al bé. 
<span class="v">10&nbsp;</span>Estimeu-vos afectuosament com a germans, avanceu-vos a honorar-vos els uns als altres. 
<span class="v">11&nbsp;</span>Esforceu-vos a ser sol·lícits. Sigueu fervents d'esperit, serviu el Senyor. 
<span class="v">12&nbsp;</span>Que l'esperança us ompli d'alegria. Sigueu pacients en la tribulació, constants en l'oració. 
<span class="v">13&nbsp;</span>Feu-vos solidaris de les necessitats del poble sant. Practiqueu amb deler l'hospitalitat. 
</div><div class="p"> 
<span class="v">14&nbsp;</span>Beneïu els qui us persegueixen. Beneïu, no maleïu. 
<span class="v">15&nbsp;</span>Alegreu-vos amb els qui estan alegres, ploreu amb els qui ploren. 
<span class="v">16&nbsp;</span>Viviu d'acord els uns amb els altres. No aspireu a grandeses, sinó poseu-vos al nivell dels humils. No us tingueu per savis. 
<span class="v">17&nbsp;</span>No torneu a ningú mal per mal; mireu de fer el bé a tothom. 
<span class="v">18&nbsp;</span>Si és possible, i fins on depengui de vosaltres, estigueu en pau amb tothom. 
<span class="v">19&nbsp;</span>Estimats, no us prengueu la justícia per la vostra mà; deixeu que actuï el càstig de Déu, tal com diu l'Escriptura: <span class="itw">A mi em toca de passar comptes, jo donaré la paga</span>, diu el Senyor. 
<span class="v">20&nbsp;</span>Més aviat, <span class="itw">si el teu enemic té fam, dóna-li menjar; si té set, dóna-li beure: serà com si posessis brases sobre el seu cap</span>. 
<span class="v">21&nbsp;</span>No et deixis vèncer pel mal; al contrari, venç el mal amb el bé. 
</div></td>
</tr>
</tbody></table>
`;

export default function PregariaDia4() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Rm 12,9-21)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        La vida es vida (Teresa de Ávila)
      </Typography>
      <Typography variant="body1" gutterBottom>
        La vida és bellesa, contempla-la
        <br />
        La vida és una oportunitat, aprofita-la
        <br />
        La vida és una benedicció, gaudeix-la
        <br />
        La vida és un somni, fes-lo realitat
        <br />
        La vida és un repte, afronta’l
        <br />
        La vida és un joc, juga’l
        <br />
        La vida és preciosa, cuida-la
        <br />
        La vida és riquesa, conserva-la
        <br />
        La vida és amor, gaudeix-lo
        <br />
        La vida és un misteri, descobreix-lo
        <br />
        La vida és una promesa, compleix-la
        <br />
        La vida és tristesa, supera-la
        <br />
        La vida és un himne, canta’l
        <br />
        La vida és una lluita, accepta-la
        <br />
        La vida és una tragèdia, domina-la
        <br />
        La vida és aventura, viu-la
        <br />
        La vida és felicitat, guanya-la
        <br />
        La vida és vida, defensa-la
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sólo por hoy (Juan XXIII)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Señor Jesús: trataré de ajustarme a la vida. Si sucede algo que me
        desagrade, no me mortificaré, ni me lamentaré, agradeceré que me haya
        sucedido, porque así se puso a prueba mi voluntad de ser feliz. Solo por
        hoy. No criticaré a nadie. Si comienzo a criticar a una persona,
        cambiaré la crítica por apreciaciones sinceras de sus virtudes, olvidaré
        sus defectos y concentraré mi atención en sus virtudes. Solo por hoy. No
        guardaré rencor a nadie. Practicaré la ley del perdón. Asumiré mis
        responsabilidades y no echaré la culpa de mis problemas a otras
        personas. Comprobaré que Dios me ama y me premia con su amor. Trataré de
        pagar un mal con un bien. Al llegar la noche, comprobaré que Dios me
        premió con un día pleno de deliciosa felicidad. Que he sido inmensamente
        feliz. Solo por hoy.
      </Typography>
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
