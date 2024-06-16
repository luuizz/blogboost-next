import Image from "next/image";
import React from "react";
import iconPlaylist from "@/assets/icon-playlist.svg";
import { itemPlayListArray } from "@/app/data";
import Link from "next/link";
import RenderComputed from "@/components/RenderComputed";
import { styles } from "./style.css";

export default function SectionPlaylists() {
  return (
    <RenderComputed asElement="section" asStyle={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textLeft}>
          <Image src={iconPlaylist} alt="Ícone de uma playlist" />
          <h4 className={styles.h4}>Algumas playlists do canal </h4>
        </div>

        <div className={styles.rightContainer}>
          {itemPlayListArray[0].items.map((item, index) => (
            <Link
              className={styles.itemPlaylist}
              key={index}
              href="#"
              title="Acessar playlist"
            >
              <div className={styles.icons}>
                {item.icon1 && <Image src={item.icon1} alt="Icon 1" />}
                {item.icon2 && <Image src={item.icon2} alt="Icon 2" />}
                {item.icon3 && <Image src={item.icon3} alt="Icon 3" />}
              </div>
              <h5 className={styles.h5}>{item.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </RenderComputed>
  );
}
