import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styles } from "../CardPostXS/style.css";
import { stylesCard } from "./style.css";
import ReadingTime from "@/components/ReadingTime";

export default function CardDefault({
  href,
  src,
  alt,
  category,
  name,
  date,
  content,
  width,
  height
}) {
  return (
    <Link className={stylesCard.cardDefault} href={`/post/${href}`}>
      <div className={stylesCard.image}>
        <Image 
        className={stylesCard.img} 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        />
      </div>
      <div>
        <span className="category">{category}</span>
        <h6 className={stylesCard.h6}>{name}</h6>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <span className={styles.span}>{date}</span>
          </li>
          <li className={styles.li}>
            <ReadingTime content={content} />
          </li>
        </ul>
      </div>
    </Link>
  );
}
