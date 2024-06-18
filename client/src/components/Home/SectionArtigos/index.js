import RenderComputed from "@/components/RenderComputed";
import React from "react";
import CardDefault from "../SectionHero/CardDefault";
import { styles } from "./style.css";
import TopSection from "@/components/TopSection";
import { constructBannerUrl } from "@/app/utils/constructBanner";
import { formatDate } from "@/app/utils/formatData";

export default function SectionArtigos({ dataPage }) {

  const data = dataPage.data;
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionArtigos}>
      <div className="container">
      <TopSection titulo="Artigos" />

        <div className={styles.allPosts}>
          {data.map((item, index) => {
            const bannerUrl = constructBannerUrl(item);
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
