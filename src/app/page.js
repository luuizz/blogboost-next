import SectionHeroHome from "@/components/Home/SectionHero/SectionHeroHome";
import SectionArtigos from "@/components/Home/SectionArtigos";
import SectionPlaylists from "@/components/Home/SectionPlaylists";
import qs from "qs";

const PostsQuery = qs.stringify({
  populate: {
    BannerPost: {
      fields: ["url", "alternativeText", "width", "height"],
    },
    categorias: {
      sort: ["createdAt:desc"],
      pagination: {
        limit: 1
      },
    },
  },
  fields: ["publishedAt", "TituloPost", "slug"],
}, { encodeValuesOnly: true });


async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";
  const url = new URL(path, baseUrl);

  url.search = PostsQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export default async function Home() {
  const strapiData = await getStrapiData("/api/single-posts");
  return (
    <>
      <SectionHeroHome />
      <SectionArtigos dataPage={strapiData} />
      <SectionPlaylists />
    </>
  );
}
