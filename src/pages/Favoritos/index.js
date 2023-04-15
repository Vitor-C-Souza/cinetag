import Banner from "components/Banner/index.js";
import styles from "./Favoritos.module.css";
import React from "react";
import Titulo from "components/Titulo/index.js";
import { CardFavorito } from "components/Card/index.js";

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
         <CardFavorito  capa='https://i.pinimg.com/564x/c7/4c/a6/c74ca6827eed655aa080143a0970242f.jpg' titulo='Goku'/>        
      </section>
    </>
  );
}
