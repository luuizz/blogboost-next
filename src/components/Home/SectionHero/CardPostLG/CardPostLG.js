import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageLG from "@/assets/img-feature.jpg"
import iconCalendar from "@/assets/icon-calendar.svg"
import iconClock from "@/assets/icon-clock.svg"
import { styles } from './style.css'

export default function CardPostLG() {
  return (
    <Link className={styles.cardPostLG} href="/post/teste">
        <div className={styles.cardPostLGImageBox}>
            <Image className={styles.cardPostLGImage} src={imageLG} alt='Post' />
        </div>

        <div>
            <div className={styles.topInfoPostLG}>
                <span className='category'>HTML & CSS</span>
                <ul className={styles.listPostLG}>
                    <li className={styles.li}>
                        <Image src={iconCalendar} alt='Ícone de um calendário' />
                        <span className={styles.span}>10, junho 2023</span>
                    </li>
                    <li className={styles.li}>
                        <Image src={iconClock} alt='Ícone de um relógio' />
                        <span className={styles.span}>1 min de leitura</span>
                    </li>
                </ul>
            </div>
            <h3 className={styles.h3}>Como montar um código semântico com no HTML?</h3>
        </div>
    </Link>
  )
}
