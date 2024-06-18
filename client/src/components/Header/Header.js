'use client'
import React, { useEffect, useState } from 'react'
import RenderComputed from '../RenderComputed'
import LogoBoost from "@/assets/logo-codeboost.svg"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import Form from './Form/Form'
import { styles } from './style.css'
import Hamburger from 'hamburger-react'

export default function Header() {

  const [isOpen, setOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setFixed(true)
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const closeMenu = () => {
        setOpen(false);
    };

  return (
    <>
    <RenderComputed asElement="header" asStyle={styles.header}>
      <div className={`${styles.container} container`}>
        <Link className={styles.logo} href="/" title='Página inicial'>
          <Image src={LogoBoost} alt='Logo do Codeboost' />
        </Link>

        <nav className={styles.nav}>
          <Navigation />
          <Form />
        </nav>
        <Hamburger label="Mostrar menu" toggled={isOpen} toggle={setOpen} /> 
      </div>
      <aside className={`${styles.aside} ${isOpen ? 'open' : ''} ${isFixed ? 'fixed' : ''}`}>
      <div className="container">
          <nav>
              <Navigation closeMenu={closeMenu} />
              <Form />
          </nav>
      </div>
    </aside>
    </RenderComputed>
    </>
  )
}
