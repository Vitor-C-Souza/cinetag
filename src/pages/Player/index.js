import Banner from "components/Banner/index.js";
import React, { useEffect, useState } from "react";
import Titulo from "components/Titulo/index.js";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NaoEncontrado from "pages/NaoEncontrado/index.js";

export default function Player() {
  const [videos, setVideos] = useState([]);
  const parametros = useParams();
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Vitor-C-Souza/cinetag-api/videos?=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(...dados);
      });
  }, [parametros.id]);

  if (!videos) {
    return <NaoEncontrado />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={videos.link}
          title={videos.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
