import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Canconer() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel1">
            1.- LLOAT SIGUEU, OH SENYOR NOSTRE{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh senyor nostre. <br />
            Lloat sigueu, oh senyor nostre.
            <br />
            Lloat sigueu, oh senyor nostre.
            <br />
            Lloat sigueu, oh senyor nostre.
            <br />
          </Typography>
          <Typography variant="body1" gutterBottom>
            Per totes les criatures
            <br />
            i pel sol i per la lluna,
            <br />
            pels estels i els vent suau
            <br />
            i pel foc i l’aigua fresca.
            <br />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh Senyor nostre...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Per la nostra mare terra <br />
            que ens sosté i ens alimenta, <br />
            per les flors, els fruits i l’herba <br />
            i pel mar i les muntanyes. <br />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh Senyor nostre...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Perquè el sentit de la vida
            <br />
            és cantar-vos i lloar-vos
            <br />
            i perquè la nostra vida
            <br />
            sigui sempre cant i dansa.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel2"> 2.- RES NO ENS PODRÀ SEPARAR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Res no ens podrà separar (3) <br />
            de l’amor de Déu. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel3"> 3.- TE SEGUIRÉ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Te seguiré a donde me lleves <br />
            sin adelantarme sin forzar el paso <br />
            sabiamente ignorante, iré donde no sé <br />
            puesto el corazón en Ti te seguiré.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel4"> 4.- AVE MARIA </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Quantes coses a la vida,
            <br />
            que semblen omplir-ho tot,
            <br />
            i no són més que mentides
            <br />
            que s'amaguen dins el cor.
            <br />
               
            <br />
            Tu has omplert la meva vida
            <br />
            estimant-me de debò.
            <br />
            Jo voldria, Mare bona, ser com tu...
            <br />
            <br />
            En silenci escoltaves
            <br />
            la Paraula de Jesús,
            <br />
            i la feies Pa de vida
            <br />
            amb l'amor teu tan profund,
            <br />
            com llavor que cau a terra
            <br />
            i germina sense por.
            <br />
            Amb el cor ple d'alegria
            <br />
            et vull cantar:
            <br />
            <br />
            AVE MARIA, AVE MARIA
            <br />
            AVE MARIA, AVE MARIA.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel5"> 5.- EL SENYOR ÉS LA MEVA FORÇA </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            El Senyor és la meva força                <br />
            El Senyor és el meu cant                  <br />
            Ell m’ha estat la salvació                    <br />
            En Ell confio i no tinc por                   <br />
            En Ell confio i no tinc por     <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel6">
            {" "}
            6.- L’AJUDA EM VINDRÀ DEL SENYOR{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            L’ajuda em vindrà del Senyor, 
            <br />
            del Senyor, el nostre Déu, 
            <br />
            que ha fet el cel i la terra, 
            <br />
            el cel i la terra.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel7">7.- JO TINC SET DE TU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Jo tinc set de Tu
            <br />
            tinc set del teu amor,
            <br />
            Jo tinc set de Tu,
            <br />
            oh Font de llibertat.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel8"> 8.- QUEDA’T AMB NOSALTRES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Pels camins d'aquesta vida, <br />
            sense veure-ho del tot clar, <br />
            amb el pas feixuc i força capficats. <br />
            Has sortit al nostre encontre, <br />
            t'has posat a caminar i per la nostra conversa has preguntat.
            <br />
            <br />
            Ens expliques l'Escriptura <br />
            com ningú no ho ha fet mai <br />
            i et reveles en el gest de partir el pa… <br />
            Queda't amb nosaltres que el dia ja comença a declinar <br />
            queda't amb nosaltres qui camina amb tu, Jesús, mai no es perdrà.{" "}
            <br />
            <br />
            Quan arriba l'hora baixa Tu fas com el que se'n va, <br />
            però nosaltres insistim entusiasmats. <br />
            Has entrat a casa nostra, <br />
            t'has deixat acomodar i et mirem als ulls amb el cor abrusat. <br />
            <br />
            Ens expliques l'Escriptura <br />
            com ningú no ho ha fet mai
            <br />
            i et reveles en el gest de partir el pa… <br />
            Queda't amb nosaltres <br />
            que el dia ja comença a declinar <br />
            queda't amb nosaltres <br />
            qui camina amb tu, Jesús, mai no es perdrà.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel9"> 9.- TU ETS QUI ENS CRIDA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Tu ets qui ens crida i en silenci venim (2).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel10">10.- NO FIXEU ELS ULLS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            No fixeu els ulls en ningú més que en Ell (2)
            <br />
            No fixeu els ulls en ningú més (2)
            <br />
            No fixeu els ulls en ningú més que en Ell.
            <br />
            <br />
            No adoreu amics…
            <br />
            <br />
            Només Ell és el camí, la veritat (2)
            <br />
            No fixeu els ulls en ningú més (2)
            <br />
            No fixeu els ulls en ningú més que en Ell.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel11"> 11.- AMANDO HASTA EL EXTREMO </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Déjame señor
            <br />
            Mirarte bien por dentro
            <br />
            Entrar en tu corazón
            <br />
            Y dejarme seducir
            <br />
            Y que aumenten mis deseos de querer ser como tú
            <br />
            Conocerte internamente
            <br />
            Amarte y seguirte más
            <br />
            Apostar mi vida junto a ti
            <br />
            Déjame verte señor
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándote la piel
            <br />
            Entregando las entrañas
            <br />
            Tus entrañas de mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            En un mirarnos hasta el fondo
            <br />
            Sin nada que reprochar y<br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Yo, el maestro y el señor
            <br />
            Ya no puedo amaros más
            <br />
            Pues como el padre me ha amado
            <br />
            Así os he amado yo
            <br />
            <br />
            Os dejo mi vida entera en este vino y este pan
            <br />
            Este pan que soy yo mismo
            <br />
            Que me parto y que me doy
            <br />
            <br />
            Mi deseo es que os améis de corazón
            <br />
            Yo también os quiero ver
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándoos la piel
            <br />
            Entregando las entrañas
            <br />
            Como lo hace una mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            <br />
            En un miraros hasta el fondo
            <br />
            Sin nada que reprochar
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Sí, te doy todo lo que soy
            <br />
            Para que sigas amando
            <br />
            La lucha por la justicia
            <br />
            Entra en esta intimidad
            <br />
            <br />
            Que se llena de personas y rostros que acariciar
            <br />
            Que me impulsa desde dentro a comprometerme más
            <br />
            Todos caben en tu corazón
            <br />
            Quiero seguirte señor
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándome la piel
            <br />
            Entregando las entrañas
            <br />
            Mis entrañas de mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            En un miraros hasta el fondo
            <br />
            Sin nada que reprochar
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            Y sin nada que pedir, y con tanto para dar...
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel12"> 12.- MAGNIFICAT </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Magnificat, Magnificat <br />
            Magnificat anima mea Dominum (2)
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel13"> 13.- CANTA AL·LELUIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Canta al·leluia al Senyor
            <br />
            Canta al·leluia al Senyor
            <br />
            Canta al·leluia, canta al·leluia
            <br />
            Canta al·leluia al Senyor.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel14">
            {" "}
            14.- L’AMOR NO PASSARÀ MAI Canta la teva fe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Si jo parlés mil llengües però no estimés,
            <br />
            si fos capaç de veure el que vindrà
            <br />
            si fos capaç de moure les muntanyes amb la fe...
            <br />
            no serviria de res!
            <br />
            <br />
            Si jo donés als pobres tot allò que tinc
            <br />
            o fos capaç de vendre'm per esclau,
            <br />
            si pretengués donar-t'ho tot però no t'estimés...
            <br />
            no serviria de res!
            <br />
            valdria tant com un timbal trencat,
            <br />
            un esquellot esquerdat...
            <br />
            <br />
            L'amor és pacient
            <br />
            l'amor és bondadós
            <br />
            l'amor troba el seu goig en la veritat
            <br />
            l'amor ho excusa tot i tot ho creu.
            <br />
            <br />
            L'amor no és envejós
            <br />
            l'amor no és altiu ni orgullós
            <br />
            l'amor no és egoista ni groller
            <br />
            l'amor no passarà mai.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel15"> 15.- ESTO QUE SOY, ESO TE DOY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
             A veces me pregunto ¿porqué yo?
            <br />
            y sólo me respondes porque quiero.
            <br />
            Es un misterio grande que nos llames
            <br />
            así tal como somos a tu encuentro
            <br />
            <br />
            Entonces redescubro una verdad,
            <br />
            mi vida, nuestra vida es un tesoro.
            <br />
            Se trata entonces sólo de ofrecerte
            <br />
            con todo nuestro amor, esto que somos
            <br />
            <br />
            <strong>
              ¿QUÉ TE DARE, QUE TE DAREMOS?,      
              <br />
              SI TODO, TODO ES TU REGALO.      
              <br />
              TE OFRECERE, TE OFRECEREMOS,
              <br />
              ESTO QUE SOMOS... ESTO QUE SOY,
              <br />
              ESO TE DOY
            </strong>
            <br />
            <br />
            Esto que soy, esto es lo que te doy,
            <br />
            esto que somos, es lo que te damos
            <br />
            Tu no desprecias nuestra vida humilde,
            <br />
            se trata de poner todo en tus manos.
            <br />
            <br />
            Aquí van mis trabajos y mi fe,
            <br />
            mis mates, mis bajones y mis  sueños.
            <br />
            Y todas las personas que me diste,
            <br />
            desde mi corazón te las ofrezco.
            <br />
            <br />
            <strong>Estribillo</strong>
            <br />
            Vi tanta gente un domingo de sol,
            <br />
            me conmovió el latir de tantas vidas
            <br />
            Y adiviné tu abrazo gigantesco,
            <br />
            y sé que sus historias recibías.
            <br />
            <br />
            Por eso tu altar luce vino y pan,
            <br />
            son signo y homenaje de la vida.
            <br />
            Misterio de ofrecerte y recibirnos,
            <br />
            humanidad que Cristo diviniza.
            <br />
            <br />
            <strong>Estribillo</strong>
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel16">16.- HIMNE DEL SINODE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Junts fem de la vida un cant, junts fem sentir aquest clam
            <br />
            Junts fem un mon millor, junts fem camí
            <br />
            Serem fidels a la crida, nosaltres som el seu poble
            <br />
            som una església en sortida junts fem camí
            <br />
            És el senyor qui ens convida, som hospital de campanya
            <br />
            Ell ens guareix les ferides, junts fem camí
            <br />
            Junts fem de la vida un cant, junts fem sentir aquest clam
            <br />
            Junts fem un mon millor, junts fem camí
            <br />
            Junts fem de la vida un cant, junts fem sentir aquest clam
            <br />
            Junts fem un mon millor, junts fem camí
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel17">17.- SEÑOR TEN PIEDAD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Senyor, tingueu pietat de nosal—tres, Senyor, dona’ns avui el teu
            perdóooo.
            <br />
            Cura el dolor del que vaig fer, encén de nou la meva fe,
            <br />
            Senyor, tingueu pietat de nosaltres.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel18">18.- PIETAT OH DEU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Pietat oh déu, vós que sou bo, vós que estimeu, <br />
            perquè sou l’amor renteu-me bé del meu gran pecat, <br />
            purifiqueu-me del meu mancameeeent. <br />
            Prou reconec el meu pecat, i el mal que he fet sempre el tinc
            present <br />
            és contra Vós contra qui he pecat, i en Vós jo he ofés tots els meus
            germaaaans. <br />
            Creeu en mi un cor ben pur, feu-me sentir vostre Esperit Sant.{" "}
            <br />
            No m’amagueu vostre esguard seré, torneu-me el goig de la
            salvacióooo. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel19">19.- BENVOLGUT PARE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Benvolgut Pare, tornem cecs i cansats. <br />
            Fes-nos el do de la teua amistat. <br />
            Que visquem sempre la joia del perdó, <br />
            Que ocupem sempre un lloc al teu costat. <br />
            A les mans teues posem nostre pecat. <br />
            Estem segurs del teu amor fidel. <br />
            Dóna’ns la força que ens cal per caminar, <br />
            cercant humils la teua voluntat. <br />
            <br /> <br />
            Pare, ja ho veus hem pecat, pare, tornem a tu. <br />
            Mira’ns, ens sentim fills teus, pare, tornem a tu. <br />
            Pare, ja ho veus hem pecat, pare, tornem a tu. <br />
            Mira’ns, ens sentim fills teus, pare, tornem a tu. <br />
            <br /> <br />
            Ja veus que fàcil ens és tornar a oblidar, <br />
            que ets nostre Pare i ens tractes com a fills. <br />
            Que no hem de témer, que Tu ens vols tal com som. <br />
            Només demanes nostra sinceritat. <br />
            <br /> <br />
            Ens cal apendre a sentir-nos a prop teu, <br />
            a reconèixer que el teu amor és gran; <br />
            sentir-nos lliures en viure com a fills <br />
            i dedicar-nos a ser tots més germans. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel20">20.- TU QUE SIEMPRE NOS PERDONAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Tú que siempre nos perdonas, porque nos quieres mucho <br />
            Tú que siempre nos perdonas, Señor ten piedad <br />
            Tú que siempre nos escuchas porque nos quieres mucho. <br />
            Tú que siempre nos escuchas Cristo ten piedad <br />
            Tú que siempre nos ayudas, porque nos quieres mucho. <br />
            Tú que siempre nos ayudas Señor ten piedad <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel21">
            21.- HOY SEÑOR ME HAS VUELTO A PERDONAR
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Hoy, Señor, me has vuelto a perdonar, <br />
            hoy, Señor, me has vuelto a sonreír, <br />
            hoy, Señor, he vuelto a tu amistad, <br />
            he vuelto a sonreír, Jesús, … qué fácil es amar. <br />
            <br />
            <br />
            Hoy, Señor, me has vuelto a perdonar, <br />
            hoy, Señor, me has vuelto a sonreír, <br />
            hoy, Señor, he vuelto a tu amistad, <br />
            he vuelto a sonreír, Jesús, … qué fácil es amar. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel22">22.- AL-LELUIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia <br />
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia <br />
            vull misericordia i no sacrificis que tota vida es respecti. <br />
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia <br />
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia <br />
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia <br />
            aleluia al·leluia leluuia, A - al-leluia al·leluia leluuia aleluia{" "}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel23">23.- ALELUYA DE LA TIERRA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Aleluya cantará, quién perdió la esperanza, <br />
            y la tierra sonreirá, Ale – luuuu – ya <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel24">24.- ALELUYA TAIZÉ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            ALELUYA, ALELU – ALELUYA, <br />
            ALELUYA, ALELU – YA. (bis) <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel25">25.- LA TAULA PARADA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Les forces es refan entorn la taula, es poden refer silencis sens
            sentit. <br />
            Es pot retrobar la Paraula, entorn la taula, entorn el pa, entorn el
            Crist. <br />
            Calen taules i plats sense horaris, taules amples seients abundants.{" "}
            <br />
            Calen plats de senzilla confiança, plats de fang del qual tots estem
            fets. <br />
            Que la taula ens aplegui a tothora, deixem fora els neguits, fem un
            lloc <br />
            A la joia de viure la festa, que ha de crèixer com el pa dins el
            forn. <br />A la taula cerquem-hi la joia i una escletxa de temps
            cada jorn; <br />
            Les forces es refan entorn la taula, es poden refer silencis sens
            sentit. <br />
            Es pot retrobar la Paraula, entorn la taula, entorn el pa, entorn el
            Crist. <br />
            Les forces es refan. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel26">26.- EL SENYOR ET CONVIDA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            El Senyor et convida, a seure a taula amb ell. <br />
            El Senyor et convida a seure a taula amb ell. <br />
            Digues sí, digues sí, el seu cos es per a tu, i aquest vi, germà,
            que ompli el teu cor. <br />
            Junt amb els teus germans, ofereix-li el teu cor, és ell qui et
            crida a deixar-ho tot, <br />
            i posa damunt l’altar tot allò que més vols: la vida, la joia i tot
            l’amor. <br />
            El Senyor et convida, a seure a taula amb ell. <br />
            El Senyor et convida a seure a taula amb ell. <br />
            Digues sí, digues sí, el seu cos es per a tu, i aquest vi, germà,
            que ompli el teu cor. <br />
            El Senyor et convida a seure a taula amb ell. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel27">27.- DIME COMO SER PAN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Dime cómo ser pan, dime cómo ser pan, cómo ser alimento, que sacia
            por dentro que trae la paz. <br />
            Dime cómo ser pan, dime cómo ser pan, dime cómo acercarme a quien no
            tiene aliento a quien cree que es cuento el reír, el amar. <br />
            Dime cómo ser pan, dime cómo dejarme comer poco a poco entregándolo
            todo y llenándome más. <br />
            Dime cómo ser pan, dime cómo ser pan, cómo ser para otros en todo
            momento, alimento y maná. <br />
            Tú que eres el pan de la vida, Tú que eres la luz y la paz, <br />
            Tú que empapas la tierra cuando llueves el cielo, dime cómo ser pan.{" "}
            <br />
            Tú que haces de mí tu reflejo, Tú que abrazas mi debilidad, <br />
            Tú que sacias mi hambre, cuando vuelvo de lejos dime cómo ser pan.{" "}
            <br />
            Dime cómo ser pan que cura la injusticia, dime cómo ser pan, que
            crea libertad. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel28">28.- CANT DE PAU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Unint les mans i els cors cantarem càntics nous, <br />
            càntics d’amor i joia, cants de pau i cants a Déu. <br />
            Joves grans i nens, tots units en un sol clam, <br />
            un crit que arribe al cel i retorne ple de pau. <br />
            Pau al món, pau al món, pau al món, és el nostre clam, <br />
            pau al món, pau als cors, pau per tu i pau per tots. <br />
            Pau al món, pau al món, pau al món, és el nostre clam, <br />
            pau al món, pau als cors, pau per tu i pau per tots. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel29">29.- ADORA DÉU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Adora Déu, el teu Senyor!, que la lloança del teu cant s’alci vers
            Ell! <br />
            Adora Déu, el teu Senyor!, que cremi el foc de l’Esperit Sant al teu
            cor! <br />
            Sense por, apropa’t al Senyor, fes-li l’ofrena del teu existir!{" "}
            <br />
            Junts canteu, lloeu el vostre Déu, que el seu amor transformi el
            vostre cor. <br />
            Adora Déu, el teu Senyor!, que la lloança del teu cant s’alci vers
            Ell! <br />
            Adora Déu, el teu Senyor!, que cremi el foc de l’Esperit Sant al teu
            cor! <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">30.- NO FIXEU ELS ULLS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            No fixeu els ulls en ningú més que en Ell. <br />
            No fixeu els ulls en ningú més que en Ell. <br />
            No fixeu els ulls en ningú més, no fixeu els ulls en ningú més, no
            fixeu els ulls en ningú més que en Ell. <br />
            No espereu, amics, ningú més que Ell, no espereu, amics, ningú més
            que Ell. <br />
            No adoreu, amics, ningú més que Ell, no adoreu, amics, ningú més que
            Ell. <br />
            Només Ell és el camí, la veritat, només Ell és el camí, la veritat.{" "}
            <br />
            No fixeu els ulls en ningú més, no fixeu els ulls en ningú més, no
            fixeu els ulls en ningú més que en Ell. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">31.- AQUÍ EM TENS </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br /> Aquí em tens, Déu meu vull fer la teva voluntat. Vull oferir
            la vida de bon grat Aquí em tens, aquí em tens!
            <br /> Aquí em tens, donant tot el que sóc als meus germans, sabent
            que Tu prepares coses grans
            <br /> Aquí em tens, aquí em tens! Em tens aquí, amb el cor ben
            disposat, vull dir-te: SÍ!, Déu Estimat!!!
            <br /> Aquí em tens! Senyor!!! Vull cantar tota la vida els teus
            favors
            <br /> I dir ben alt, ben fort! La pregària del meu cor!!!
            <br /> Aquí em tens! Senyor!!! Contemplant la teva glòria,
            <br /> Descobrint-te en els més pobres i anunciant el teu amor… aquí
            em tens! Aquí em tens, deixant enrera les pors del passat, vivint la
            teva crida amb fidelitat,
            <br /> Aquí em tens, aquí em tens!
            <br /> Aquí em tens, obrint els ulls a aquesta realitat, donant
            resposta per la comunitat Aquí em tens, aquí em tens! Em tens aquí,
            amb el cor ben disposat, vull dir-te: SÍ!, Déu Estimat!!! PAquí em
            tens! Senyor!!! Vull cantar tota la vida els teus favors I dir ben
            alt, ben fort! La pregària del meu cor!!! Em Aquí em tens! senyor!!!
            Contemplant la teva glòria, Descobrint-te en els més pobres i
            anunciant el teu amor… aquí em tens!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">32.- L’AMOR NO PASSARÀ MAI </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br /> Si jo parlés mil llengües però no estimés, si fos capaç de
            veure el que vindrà,
            <br />
            si fos capaç de moure les muntanyes amb la fe no serviria de res.
            <br />
            Si jo donés als pobres tot allò que tinc, o fos capaç de vendre’m
            per esclau,
            <br />
            si pretengués donar-ho tot però no estimés, no serviria de res.
            Valdria tant com un timbal trencat, un esquellot esquerdat...
            <br />
            L’amor és pacient, l’amor és bondadós, l’amor troba el seu goig en
            la veritat, l’amor ho excusa tot i tot ho creu. L’amor no és
            envejós, l’amor no és altiu ni orgullós, l’amor no és egoista ni
            groller, l’amor… no passarà mai!
            <br /> L’amor és pacient, l’amor és bondadós, l’amor troba el seu
            goig en la veritat, l’amor ho excusa tot i tot ho creu . L’amor no
            és envejós, l’amor no és altiu ni orgullós, l’amor no és egoista ni
            groller, l’amor… no passarà mai!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">33.- DIOS ESTA AQUÍ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            Dios esta aquí, tan cierto como el aire que respiro
            <br />
            Tan cierto como la mañana se levanta el sol, tan cierto que cuando
            le hablo el me puede oir
            <br />
            Dios esta aquí, tan cierto como el aire que respiro.
            <br />
            Tan cierto como la mañana se levanta el sol, tan cierto que cuando
            le hablo el me puede oir
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">34.- ES DESDE L’AMOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            Es desde l’amor, que vull parlar-te, de les coses que senzillament
            hem compartit ah ah ah quant l’esperança no habitava en el meu cor
            cercant miratges que no em duien mui a port. Es desde l’amor, que
            vull cantar-te, i agrair-te tot el que tu vas fent en mi, ah ah ah
            les teves mirades, les teves paraules, m’apropen a déu em fan ser
            feliç de debò.
            <br />I sé que tu m’estimaràs, i que em perdonaràs, quant vegis que
            m’allunyo I jo t’ofereixo el meu cor, la vida i la cançó, tot el que
            puc donar-te, és senzill compartir des de l’amor. I, desde l’amor,
            vull oferir-te els meus somnis, i les il.lusions d’un nou present,
            ah ah ah deixant enrere les foscors i les angoixes, que jo sentia
            quant estava lluny de tu.
            <br /> Es desde l’amor que me n’adono, que en tu tinc un amic de
            veritat, ah ah ah i res no em demanes, m’escoltes silent, vull
            compartir amb tu la vida, l’amor i la fe. I sé que tu m’estimaràs, i
            que em perdonaràs, quant vegis que m’allunyo I jo t’ofereixo el meu
            cor, la vida i la cançó, tot el que puc donar-te, és senzill
            compartir des de l'amor. és senzill compartir des de l’amoooor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">35.- EL SENYOR ÉS LA MEUA FORÇA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            El Senyor és la meva força
            <br />
            El Senyor, el meu cant
            <br />
            Ell ha estat la salvació
            <br />
            En ell confio i no tinc por
            <br />
            En ell i no tinc por
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">36.- VINE SANT ESPERIT </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            Vine Sant Esperit, Sant Esperit,
            <br />
            Vine Sant Esperit, Sant Esperit,
            <br />
            Vine Sant Esperit als nostres cors,
            <br />
            Vine Sant Esperit omple’ns d’amor
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">37.- SE MI LUZ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br /> Se mi luz, enciende mi noche
            <br />
            Se mi luz, enciende mi noche
            <br />
            Se mi luz, enciende mi noche
            <br />
            Mi noche, se mi luz.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">
            38.- CANTIC DE MARIA (MAGNIFICAT){" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            La meua ànima canta al Senyor, el meu esperit celebra Déu Salvador
            <br />
            perquè ha mirat la petitesa de la seua serventaaaaa. El seu nom es
            sant i l’amor que te s’estén de generacio en generacio de generacio
            en generacioooooo Les obres del seu braç són potents i grans,
            dispersa els homes de cor altiu, derroca els poderosos i exalça els
            humils, omple de béns els pobreeees.
            <br />
            El seu nom es sant i l’amor que te s’estén de generacio en generacio
            de generacio en generacioooooo Al seu servent ha protegit el Senyor,
            com ho havia promés als nostres pares fa temps, i s’ha recordat del
            seu amor, a Abraham per sempreeeee. El seu nom es sant i l’amor que
            te s’estén de generacio en generacio de generacio en generacioooooo
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">39.- DIJISTE SI </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            Dijiste Sí y la tierra estalló de alegría
            <br />
            Dijiste Sí y en tu vientre latía divina la Salvación.
            <br />
            HÁGASE EN MÍ,DE CORAZÓN, la voluntad de mi Señor. que se cumplan en
            mí cada día los sueños de Dios. María, las tinieblas se harán
            mediodía a una sola palabra que digas, en tus labios alumbra ya el
            Sol.
            <br />
            María, la doncella que Dios prometía, un volcán de ternura divina,
            primavera de un Dios Redentor.
            <br />
            Gabriel tembló, conmovido con tanta belleza, Madre de Dios, cuélame
            en tu mirada de amor de la Anunciación.
            <br />
            HÁGASE EN MÍ DE CORAZÓN, La voluntad de mi Señor. Que se cumplan en
            mi cada día los sueños de Dios. María las tinieblas se harán
            mediodía a una sola palabra que digas, A en tus labios alumbra ya el
            Sol. María la doncella que Dios prometía un volcán de ternura divina
            primavera de Dios Redentor.
            <br />
            HÁGASE EN MÍ DE CORAZÓN, La voluntad de mi Señor. Que se cumplan en
            mi cada día los sueños de Dios.
            <br />
            María las tinieblas se harán mediodía a una sola palabra que digas,
            en tus labios alumbra ya el Sol. María la doncella que Dios prometía
            un volcán de ternura divina.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel30">40.- DE DOS EN DOS </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            <br />
            <br />
            Si una mano cambia cosas, con más manos cambian más caminar con un
            amigo, quita el miedo de pensar
            <br />
            que es difícil el camino, que habrá luz y oscuridad
            <br />
            caminar con un amigo, nos recuerda que Tú estás
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS
            <br />
            SIEMPRE EN CAMINO HACIA LOS DEMÁS
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS
            <br />
            ALLÍ ESTARÁS… ALLÍ ALLI ESTARÁS
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS
            <br />
            YA NO HABRÁ MIEDO NI SOLEDAD
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS
            <br />
            ALLÍ ESTARÁS JESÚS…. ALLÍ ESTARÁS
            <br />
            Nos envías con lo puesto, sin acumular de más
            <br />
            pues Tú sabes que es más cierto, compartir que regalar
            <br />
            que es mejor dar de uno mismo, sin medida y sin mirar
            <br />
            pues el mundo solo cambia, compartiendo de verdad
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS ….
            <br />
            Que no llegue a creer nunca, que este mundo es como está
            <br />
            que no me conforme y crea, que yo no puedo hacer más
            <br />
            porque el agua son sus gotas, y unidas hacen caudal
            <br />
            riega tierras y da vida, y llegan más cuantas más hay
            <br />
            DE DOS EN DOS, DE MÁS EN MÁS …..
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
