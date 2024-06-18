import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import iconCalendar from "@/assets/icon-calendar.svg"
import { styles } from './style.css'
import { formatDate } from '@/app/utils/formatData'
import { constructBannerUrl } from '@/app/utils/constructBanner'

export default function CardPostLG({ data }) {
    const imageUrl = constructBannerUrl(data);
    const formattedDate = formatDate(data.attributes.publishedAt);

  return (
    <Link className={styles.cardPostLG} href={`/post/${data.attributes.slug}`}>
        <div className={styles.cardPostLGImageBox}>
            <Image 
            className={styles.cardPostLGImage} 
            src={imageUrl} 
            alt={data.attributes.BannerPost.data.attributes.alternativeText}
            width={data.attributes.BannerPost.data.attributes.width}
            height={data.attributes.BannerPost.data.attributes.height}
            />
        </div>

        <div>
            <div className={styles.topInfoPostLG}>
                <span className='category'>{data.attributes.categorias.data[0].attributes.NomeCategoria}</span>
                <ul className={styles.listPostLG}>
                    <li className={styles.li}>
                        <Image src={iconCalendar} alt='Ícone de um calendário' />
                        <span className={styles.span}>{formattedDate}</span>
                    </li>
                </ul>
            </div>
            <h3 className={styles.h3}>{data.attributes.TituloPost}</h3>
        </div>
    </Link>
  )
}
