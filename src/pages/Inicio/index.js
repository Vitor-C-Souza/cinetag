import Banner from "components/Banner/index.js";
import { Card } from "components/Card/index.js";
import Titulo from "components/Titulo/index.js";
import Videos from "json/db.json";
import React from "react";
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <>
      
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {Videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
      
    </>
  );
}
