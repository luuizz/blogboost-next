import RenderComputed from "@/components/RenderComputed";
import CardPostLG from "./CardPostLG/CardPostLG";
import CardPostXS from "./CardPostXS/CardPostXS";
import { stlyes } from "./style.css";
import { formatDate } from "@/app/utils/formatData";
import { constructBannerUrl } from "@/app/utils/constructBanner";

export default function SectionHeroHome({ dataPage }) {

  const data = dataPage.data;

  // Primeiro post
  const lastPost = data.slice(-1)[0];

  // 3 últimos posts
  const lastIndex = data.length - 1;
  const moreRecents = data.slice(lastIndex - 2, lastIndex + 1).reverse();

  return (
    <RenderComputed asElement="section" asStyle={stlyes.heroPost}>
      <div className={`${stlyes.containerHero} container`}>
        <div className={stlyes.leftContainer}>
          <div className={stlyes.titleLeft}>
            <h1 className="category">tech blog</h1>
            <h2 className={stlyes.h2}>Em destaque</h2>
          </div>

          <CardPostLG data={lastPost} />
        </div>

        <div className={stlyes.rightContainer}>
          <h4>Mais recentes</h4>
          <div className={stlyes.allCards}>
            {moreRecents.map((item, index) => {
              const bannerUrl = constructBannerUrl(item);
              const formattedDate = formatDate(item.attributes.publishedAt);
              return (
                <div className={stlyes.itemPost} key={item.id}>
                <CardPostXS
                  href={`/post/${item.attributes.slug}`}
                  alt={item.attributes.BannerPost.data.attributes.alternativeText}
                  category={item.attributes.categorias.data[0].attributes.NomeCategoria}
                  date={formattedDate}
                  name={item.attributes.TituloPost}
                  src={bannerUrl}
                  width={item.attributes.BannerPost.data.attributes.width}
                  height={item.attributes.BannerPost.data.attributes.height}
                />
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </RenderComputed>
  );
}
