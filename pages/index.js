import React, { useState } from 'react';
import styles from './styles/RomanticPhrasesComponent.module.css';

const RomanticPhrasesComponent = () => {
  const [phrases, setPhrases] = useState([
    "O amor é a essência da vida.",
    "Encontrar você foi a melhor coisa que já me aconteceu.",
    "Cada momento ao seu lado é um tesouro precioso.",
    "Seu sorriso ilumina até o dia mais nublado.",
    "Você é o meu porto seguro e minha inspiração diária.",
    "No seu abraço, encontro paz e conforto.",
    "O tempo parece parar quando estamos juntos.",
    "Cada olhar seu é um convite para um mundo de amor.",
    "Meu coração bate no ritmo do seu.",
    "Você é a razão do meu sorriso constante.",
  ]);

  const [currentPhrase, setCurrentPhrase] = useState('');

  const updatePhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
  };

  return (
    <div className={styles.romanticPhrasesComponent}>
      <h2>Frases Românticas para o seu Desafio do <a href="https://Curso.dev" target="_blank">Curso.dev</a></h2>
      <p className={styles.phrase}>"{currentPhrase}"</p>
      <button className={styles.button} onClick={updatePhrase}>Gerar frase</button>
    </div>
  );
}

export default RomanticPhrasesComponent;
