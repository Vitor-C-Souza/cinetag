import Banner from "components/Banner/index.js";
import React from "react";
import Titulo from "components/Titulo/index.js";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import styles from "./Player.module.css";

export default function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });
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
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}