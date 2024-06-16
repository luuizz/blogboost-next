import RenderComputed from "@/components/RenderComputed";
import React from "react";
import CardDefault from "../SectionHero/CardDefault";
import { postPopulars } from "@/app/data";
import { styles } from "./style.css";
import TopSection from "@/components/TopSection";

export default function SectionArtigos() {
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionArtigos}>
      <div className="container">
      <TopSection titulo="Artigos" />

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
