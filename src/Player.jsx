import * as React from "react";
import ReactPlayer from "react-player/lazy";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Typography } from "@mui/material";
import Logo from "./logo.svg?react";
import "./Player.css";
export default function Player({ title, media, day }) {
  const [url, setUrl] = React.useState(media[0].url);

  React.useEffect(() => {
    setUrl(media[0].url);
  }, [media]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <NativeSelect
            inputProps={{
              name: "media",
              id: "uncontrolled-native",
            }}
            onChange={(e) => setUrl(e.target.value)}
          >
            {media.map((med) => (
              <option key={med.url} value={med.url}>
                {med.label}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ReactPlayer
          style={{ marginTop: "30px" }}
          width="80vw"
          height={url.includes("youtube") ? "calc(2 * (80vw) /3)" : "40px"}
          controls
          url={url}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Logo className="logo" />
      </Box>
      {title == "Música" &&
        day == 1 &&
        url.includes("v4Kp6S5smnE") /* mattmaher */ && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography id="panel1">Lletra</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body1"
                gutterBottom
              >
                Father let Your Kingdom come
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven
                <br />
                Right here in my heart
                <br />
                Father let Your Kingdom come
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven
                <br />
                Right here in my heart
                <br />
                Give us this day our daily bread
                <br />
                Forgive us, forgive us
                <br />
                As we forgive the ones who sinned against us
                <br />
                Forgive them
                <br />
                And lead us not into temptation
                <br />
                But deliver us from the evil one
                <br />
                Let Your kingdom come
                <br />
                Father let Your Kingdom come (Holy, holy)
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven (Let it be done)
                <br />
                Right here in my heart
                <br />
                Father let Your Kingdom come (Holy, holy)
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven (Let it be done)
                <br />
                Right here in my heart
                <br />
                Give us this day our daily bread
                <br />
                Forgive us, forgive us
                <br />
                As we forgive the ones who sinned against us
                <br />
                Forgive them
                <br />
                And lead us not into temptation
                <br />
                But deliver us from the evil one
                <br />
                Let Your kingdom come
                <br />
                It's Yours, it's Yours
                <br />
                All Yours, all Yours
                <br />
                The kingdom, the power, the glory are Yours
                <br />
                It's Yours, it's Yours
                <br />
                All Yours, all Yours
                <br />
                Forever and ever the kingdom is Yours
                <br />
                It's Yours, it's Yours
                <br />
                All Yours, all Yours
                <br />
                The kingdom, the power, the glory are Yours
                <br />
                It's Yours, it's Yours
                <br />
                All Yours, all Yours
                <br />
                Forever and ever the kingdom is Yours
                <br />
                Father let Your Kingdom come (Holy, holy)
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven (Let it be done)
                <br />
                Right here in my heart (Here in my heart)
                <br />
                Father let Your Kingdom come (Holy, holy)
                <br />
                Father let Your will be done
                <br />
                On earth as in heaven (Let it be done)
                <br />
                Right here in my heart (Here in my heart)
                <br />
                On earth as in heaven
                <br />
                Right here in my heart
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      {title == "Música" &&
        day == 1 &&
        url.includes("VlSEIa1zubs") /* coldplay */ && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography id="panel1">Lletra</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body1"
                gutterBottom
              >
                (Whoa!) <br />
                And so We Pray <br />
                <br />
                I pray that I don’t give up <br />
                Pray that I do my best <br />
                Pray that I can lift up
                <br />
                Pray my brother is blessed <br />
                Praying for enough
                <br />
                Pray Virgilio wins
                <br />
                Pray I-I-I
                <br />
                Judge nobody and forgive me my sins
                <br />
                I pray we make it
                <br />
                Pray my friend will pull through
                <br />
                Pray as I take it
                <br />
                Unto others I do
                <br />
                Praying on your love
                <br />
                We pray with every breath <br />
                Though I-I–I’m in the valley of the shadow of death
                <br />
                <br />
                And so We Pray
                <br />
                For someone to come and show me the way <br />
                And so We Pray
                <br />
                For some shelter and some records to play <br />
                And so We Pray
                <br />
                We’ll be singing Baraye
                <br />
                Pray that we make it to the end of the day <br />
                And so We Pray
                <br />
                I know somewhere that heaven is waiting
                <br />
                And so We Pray
                <br />
                I know somewhere there’s something amazing <br />
                And so We Pray
                <br />
                I know somewhere we’ll feel no pain <br />
                Until we make it to the end of the day
                <br />
                <br />
                hay que aceptarlo
                <br />
                si nos perdimos, fue tal vez para encontrarnos
                <br />
                y nos caemos pa' aprender a levantarnos <br />
                para abrazarnos
                <br />
                porque vivir es darse cuenta que todo pasa por algo
                <br />
                y poco a poco ... vamos brindando por los corazones rotos <br />
                y sonriendo, no solo para la foto. <br />
                todos nosotros, mirando al cielo desde el suelo, somos la misma
                piel
                <br />
                <br />
                And so We Pray
                <br />
                For someone to come and show me the way <br />
                And so We Pray
                <br />
                For some shelter and some records to play <br />
                And so We Pray
                <br />
                We’ll be singing Baraye <br />
                Pray that we make it to the end of the day
                <br />
                And so We Pray
                <br />
                I know somewhere that heaven is waiting
                <br />
                And so We Pray
                <br />
                I know somewhere there’s something amazing <br />
                And so We Pray
                <br />
                I know somewhere we’ll feel no pain <br />
                Until we make it to the end of the day
                <br />
                <br />
                On my knees
                <br />
                I pray
                <br />
                As I sleep and wake
                <br />
                Cause inside my head is a frightening place <br />
                Keep a smiling face
                <br />
                Only by His grace
                <br />
                Cause love’s more than I can take
                <br />
                <br />
                And so We Pray
                <br />
                And so We Pray
                <br />
                And so We Pray
                <br />
                We’ll be singing Baraye <br />
                ‘til nobody’s in need <br />
                And everybody can say
                <br />
                <br />
                La la la la la la la (la la) <br />
                La la la la la la la (la la la la)
                <br />
                La la la la la la la (sing it to me) <br />
                La la la la la
                <br />
                We Pray We Pray
                <br />
                I know somewhere that heaven is waiting (is waiting)
                <br />
                I know somewhere there’s something amazing (something amazing)
                <br />
                Until we feel no pain
                <br />
                We Pray <br />
                We Pray
                <br />
                We Pray
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
    </div>
  );
}
