import { categorysLinks } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styles } from './style.css'

export default function Navigation() {

  return (
    <ul className={styles.ul}>
      {categorysLinks.map((item, index) => (
        <li key={index}>
          <Link className={styles.itemCategory} href={item.path} title={`Ir para categoria ${item.label}`}>
            <Image src={item.icon} alt={item.altText} />
            <span className={styles.itemCategorySpan}>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
