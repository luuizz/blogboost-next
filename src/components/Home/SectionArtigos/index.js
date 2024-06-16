import RenderComputed from "@/components/RenderComputed";
import React from "react";
import CardDefault from "../SectionHero/CardDefault";
import { postPopulars } from "@/app/data";
import { styles } from "./style.css";

export default function SectionArtigos() {
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionArtigos}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.h2}>Artigos</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet 🚀</p>
        </div>

        <div className={styles.allPosts}>
          {postPopulars.map((item, index) => (
            <div key={index}>
              <CardDefault
                href={item.path}
                alt={item.alt}
                category={item.category}
                date={item.date}
                readingTime={item.reading}
                name={item.title}
                src={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </RenderComputed>
  );
}
