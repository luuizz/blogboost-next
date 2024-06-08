import React from 'react'
import RenderComputed from '../RenderComputed'
import LogoBoost from "@/assets/logo-codeboost.svg"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import Form from './Form/Form'
import { styles } from './style.css'

export default function Header() {
  return (
    <RenderComputed asElement="header" asStyle={styles.header}>
      <div className={`${styles.container} container`}>
        <Link className={styles.logo} href="/" title='Página inicial'>
          <Image src={LogoBoost} alt='Logo do Codeboost' />
        </Link>

        <nav className={styles.nav}>
          <Navigation />
          <Form />
        </nav>
      </div>
    </RenderComputed>
  )
}
