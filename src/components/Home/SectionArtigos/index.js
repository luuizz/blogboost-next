import RenderComputed from "@/components/RenderComputed";
import React from "react";
import CardDefault from "../SectionHero/CardDefault";
import { postPopulars } from "@/app/data";
import { styles } from "./style.css";
import TopSection from "@/components/TopSection";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  return `${day}, ${month}`;
}

export default function SectionArtigos({ dataPage }) {

  const data = dataPage.data;
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionArtigos}>
      <div className="container">
      <TopSection titulo="Artigos" />

        <div className={styles.allPosts}>
          {data.map((item, index) => {
            const bannerUrl = `http://localhost:1337${item.attributes?.BannerPost?.data?.attributes?.url}`;
            const formattedDate = formatDate(item.attributes.publishedAt);
            return (
                <div key={index}>
                <CardDefault
                    href={item.attributes.slug}
                    alt={item.attributes.BannerPost.data.attributes.alternativeText}
                    date={formattedDate}
                    name={item.attributes.TituloPost}
                    category={item.attributes.categorias.data[0].attributes.NomeCategoria}
                    src={bannerUrl}
                    width={item.attributes.BannerPost.data.attributes.width}
                    height={item.attributes.BannerPost.data.attributes.height}
                    content={item.attributes.ConteudoPost}
                />
              </div>
            )
            })}
        </div>
      </div>
    </RenderComputed>
  );
}
