'use client'
import React from "react";
import RenderComputed from "../RenderComputed";
import Image from "next/image";
import iconArrowUp from "@/assets/icon-arrow-up.svg"
import logoBoost from "@/assets/logo-boost.svg"
import { styles } from "./style.css";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  return <RenderComputed asElement="footer" asStyle={styles.footer}>
    <div className={`container ${styles.container}`}>
      <div className={styles.leftContainer}>
        <strong className={styles.strong}>©${currentYear} CodeBoost</strong>
        <p className={styles.leftP}>O curso Codeboost foi desenvolvido por William Moreira. As vagas são distribuídas por turmas de forma sazonal. Caso perca alguma oportunidade é só aguardar a próxima turma que normalmente acontece dentro do período de 3 a 4 meses.</p>
      </div>

      <div className={styles.righContainer}>
        <div className={styles.group}>
          <span className={styles.spanGroup}>Grupo</span>
          <Image src={logoBoost} alt="Logo boost" />
        </div>
        <button className={styles.button} title="Voltar para o topo" onClick={handleScrollToTop}>
          <Image src={iconArrowUp} alt="Ícone de uma seta para cima" />
        </button>
      </div>
    </div>
  </RenderComputed>;
}
