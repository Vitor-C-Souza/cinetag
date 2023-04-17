import styles from './NaoEncontrado.module.css'
import React from 'react'

export default function NaoEncontrado() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteudo que você procura não foi encontrado!</p>
    </section>
  )
}
