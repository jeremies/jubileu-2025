import * as React from "react";

import Player from "./Player";

const musica = [
  {
    label: "Himne Jubileu 2025",
    url: "./himne-jubileu.m4a",
  },
  {
    label: "Coldplay - WE PRAY (TINI Version) (Official)",
    url: "https://www.youtube.com/watch?v=VlSEIa1zubs",
  },
  {
    label: "The Lord's Prayer - Matt Maher (Lyric Video)",
    url: "https://www.youtube.com/watch?v=v4Kp6S5smnE",
  },
  {
    label: "Cançó «Beneiré el Senyor», Worship.cat",
    url: "https://www.youtube.com/watch?v=fsj_msYI1CI",
  },
  {
    label: "Cançó «Oceans». Hillson.",
    url: "https://www.youtube.com/watch?v=1m_sWJQm2fs",
  },
  {
    label: "Cançó «Tu modo», de Cristobal Fones",
    url: "https://www.youtube.com/watch?v=5wXCLdnOQj4",
  },
  {
    label: "Cançó: «Et seguiré», Worship.cat.",
    url: "https://www.youtube.com/watch?v=5OsC53O_lYU",
  },
  {
    label: "«Sin miedo», Cristobal Fones sj.",
    url: "https://www.youtube.com/watch?v=PneT5asOq_M",
  },
  {
    label: "«Hágase», Camila Garrido i Cristóbal Fones sj.",
    url: "https://www.youtube.com/watch?v=6TabT1p1MbI",
  },
];

export default function Musica() {
  return <Player title={"Música"} media={musica} />;
}
