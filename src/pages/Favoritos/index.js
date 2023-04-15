import Banner from "components/Banner/index.js";
import styles from "./Favoritos.module.css";
import React from "react";
import Titulo from "components/Titulo/index.js";
import Card from "components/Card/index.js";
import { useFavoritoContext } from "Contextos/Favoritos.js";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}
