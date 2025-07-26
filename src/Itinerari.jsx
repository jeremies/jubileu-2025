import * as React from "react";
import Typography from "@mui/material/Typography";
import pisa from "./pisa.avif";
import coliseo from "./coliseo.jpg";
import siena from "./siena.avif";
import florencia from "./florencia.avif";
import { Box } from "@mui/material";

export default function Itinerari({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Itinerari
      </Typography>
      {day == 1 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            27/JULIOL. (nit del 27 al 28 Juliol) - LA
            RÀPITA-TORTOSA-LLEIDA-PISA-RONTA
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Hem de portar el esmorzar per al dia 28 de Juliol. Sortida el 27
              juliol a les 22.30 hrs, La Ràpita IES els Alfacs, 23.00 hrs de
              Tortosa, al costat de l’auditori, a les 01.15 hrs Lleida, Camp
              d’esports. I continuació del viatge amb direcció a Itàlia.
              Arribada a Pisa al voltant de les 12.00 hrs.- i dinar lliure.{" "}
            </strong>
            Temps lliure. Dinàmica i animada per la impor- tant història que
            desprenen les seves muralles, Pisa ens recorda immediatament a la
            Torre Inclinada, símbol de la ciutat i el monument italià més
            conegut del món. Junta- ment amb la catedral i el baptisteri, la
            Torre de Pisa forma part del conjunt de "Milagros" que va denominar
            Gabrie- le D'Annunzio, d'aquí el nom Piazza dei Miracoli, que defi-
            neix perfectament el lloc que els alberga.
            <strong>
              {" "}
              Celebració de Missa. Missa a les 15.00 .- al Duomo de Pisa. Per la
              tarda a les 16.30 hrs.- continuación del viatge amb direcció a
              Ronta. Arribada a les 19.30 hrs.- sopar i allotjament inclós.
            </strong>
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
            29/JULIOL.- RONTA (SAN GIMIGNANO- SIENA)
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar a l’hotel . Sortida a les 07.30 hrs.-amb direcció a San
              Gimigna- no. Arribada
            </strong>{" "}
            i temps lliure per visitar aques- ta població. Una bella ciutat
            enclavada entre els pujols de Siena i els assole- llats pujols de la
            Vall d'Elsa, envoltada de muralles del segle XIII i rica d'encant
            medieval encara intacte: això és San Gimignano, una petita i
            estimada perla toscana. Important visi- tar el seu centre històric i
            les seves torres, la plaça del Duomo…
            <strong>
              A les 11.30 hrs- sortida amb dirección a Siena. Arribada al
              voltant de les 14.00 hrs.- Dinar i a les 15.30hrs.- Missa al Duomo
              de Siena.
            </strong>{" "}
            i temps lliure per la visita de Siena. Siena, encantadora ciutat al
            cor de la Toscana, conserva intacte el seu centre històric medieval.
            A la Piazza del Camp es respira una atmosfera de temps passats. Aquí
            s'enfronten el Palazzo Pubblico i la Torre del Mangia. No et perdis
            la Catedral dedicada a l'Asunción, amb la seva façana policromada en
            blanc i negre i el seu sòl ple de símbols esotèrics. En el seu
            interior es poden admirar estàtues de Miguel Ángel i frescos de
            Pinturicchio.
            <strong>
              Sortida de Siena a les 17.00 hrs.- i arribada a l’hotel de Ronta
              al voltant de les 19.30 hrs.- Sopar i allotjament.
            </strong>
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
            30/JULIOL.- RONTA( FLORÈNCIA)
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar a l’hotel i sortida amb dirección a Florència. Arriba- da
              i celebració de la Missa, a les 10.00hrs a la basílica de San- ta
              Maria Novella, Puerta lateral izquierda de la fachada de la
              basilica.
            </strong>{" "}
            Temps lliure per poder passejar per aquesta en- cantadora ciutat. Va
            ser el bressol del Renaixement i la ca- pital mundial de l'art en el
            segle XV. Compta amb un dels cen- tres històrics més importants i
            amb alguns dels museus més famosos del món. Al seu voltant es troba
            un dels paisatges més emblemàtics i característics del planeta. Tota
            Florència és espectacular: des de les botigues fins als carrers que
            conduei- xen als pujols situats immediatament darrere de les zones
            més turístiques; des dels barris més genuïns i populars, que
            sorgeixen als afores del centre històric, fins als monuments que
            expressen la seva ànima. El seu Ponte Vechio, la Basílica de Santa
            Maria di Fiori, la plaça del Duomo, els jardins del Boboli, la
            galeria de la Academia, la Basílica de San Lo- renzo, el mercat
            central…{" "}
            <strong>
              A última hora de la tarda, retorn a l’hotel. Sopar i allotja-
              ment.
            </strong>
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
      {day == 4 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            31/JULIOL.-RONTA-ORVIETO-ROMA
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar i sortida a les 07.00 hrs.- amb direcció a Roma. Arribada
              a Orvieto a les 10.00 hrs.- i visita lliure. El Duomo (la
              Catedral) celebració missa,
            </strong>{" "}
            símbol de la ciutat, és una joia de l'arquitectura romànic- gòtica.
            Destaquen els esplèndids mosaics daurats que il·luminen la façana i
            la Capella de San Brizio, que alberga un dels majors cicles
            pictòrics del Renaixement iniciat per Beat Angelico i acabat per
            Lucca.{" "}
            <strong>
              Dinar lliure i sortida a les 15.00 hrs.- amb direcció a Roma.
              Arribada al voltant de les 18.30 hrs.- i trasllat a la zona de
              l’allotjament del joves; Colegio Español Via de Torre Rossa.
              Allotjament. Par. San Ga- briele Arcangelo; Viale Cortina
              D'Ampezzo, 144; Roma- 00135, IT
            </strong>
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            1/AGOST. ROMA
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar. Al matí visita del Colisseo i visita d’una Basílica a
              concretar, podria ser St. Maria la Major o St. Clemente de Letrán.
              Dinar i sopar de càtering. Recollir al costat de la Plaça de St.
              Pere. Per la tarda trasllat al Vaticà per asistir a la Missa amb
              tots els Joves Cristians de tota España CEE. Retorn a la parròquia
              san Gabriel Arcàngel.
            </strong>
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            2/AGOST. ROMA
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar. Missa i trasllat a Tor Vergata.- Vigilia amb el Sant
              Pare. Dormim a l’aire lliure. A l’exterior, a cel obert...
            </strong>
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            3/ AGOST.- ROMA-TORTOSA
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 3 }} gutterBottom>
            <strong>
              Esmorzar. - Santa Missa presidida pel Sant Pare a Tor Vegata.
              Sortida de Roma a les 14.00 hrs.- Amb direcció a Tortosa. Parades
              en ruta i nit en ruta. Arribada a Tortosa el dia 4/AGOST. FÍ DEL
              VIATGE. Les menjades fins al final de l viatge no estan incloses.
            </strong>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={coliseo} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Coliseu de Roma
            </Typography>
          </Box>
        </>
      )}
    </div>
  );
}
