import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styles } from './style.css'

export default function CardPostXS({ href, src, alt, category,  name, date, readingTime}) {
  return (
    <Link className={styles.cardPostCS} href={href} title='Acessar post'>
        <div className={styles.image}>
            <Image className={styles.img} src={src} alt={alt} />
        </div>
        <div className={styles.info}>
            <span className='category'>{category}</span>
            <h6 className={styles.h6}>{name}</h6>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <span className={styles.span}>{date}</span>
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{readingTime}</span>
                </li>
            </ul>
        </div>
    </Link>
  )
}
