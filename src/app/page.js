import Image from "next/image";
import styles from "./page.module.css";
import SectionHeroHome from "@/components/Home/SectionHero/SectionHeroHome";
import SectionArtigos from "@/components/Home/SectionArtigos";
import SectionPlaylists from "@/components/Home/SectionPlaylists";

export default function Home() {
  return (
    <>
      <SectionHeroHome />
      <SectionArtigos />
      <SectionPlaylists />
    </>
  );
}
