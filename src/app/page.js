import Image from "next/image";
import styles from "./page.module.css";
import SectionHeroHome from "@/components/SectionHero/SectionHeroHome";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <SectionHeroHome />
    </>
  );
}
