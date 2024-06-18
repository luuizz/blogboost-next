import RenderComputed from '@/components/RenderComputed'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import iconHome from "@/assets/icon-home.svg"
import iconArrow from "@/assets/icon-arrow-left.svg"
import imagePost from "@/assets/banner-react.jpg"
import iconUser from "@/assets/icon-user.svg"
import iconTime from "@/assets/icon-time.svg"
import { heroStyles } from './style.css'

export default function HeroPost() {
  return (
    <RenderComputed asElement="section" asStyle={heroStyles.section}> 
      <div className="container">
          <div className={heroStyles.topDetails}>
            <ul className={heroStyles.breadcrumbs}>
              <li className={heroStyles.breadLi}>
                <Link href="/" title='Voltar para página inicial'>
                  <Image src={iconHome} alt='Ícone de uma casa' />
                </Link>
              </li>
              <li className={heroStyles.breadLi}>
                <Link className={heroStyles.aBread} href="#">HTML & CSS</Link>
              </li>
              <li className={heroStyles.breadLi}>
                <span className={heroStyles.spanBread}>Página atual</span>
              </li>
            </ul>
            <Link className={heroStyles.btn} href="/" title='Voltar para o início'>
              <Image className={heroStyles.btnImg} src={iconArrow} alt='Ícone de uma seta' />
              Voltar para o início
            </Link>
          </div>
          <div className={heroStyles.featurePost}>
            <div className={heroStyles.image}>
              <Image className={heroStyles.img} src={imagePost} />
            </div>
            <div className={heroStyles.boxInfos}>
              <span className='category'> HTML & CSS</span>
              <h1 className={heroStyles.h1}>Como montar um código semântico com no HTML?</h1>
              <ul className={heroStyles.ulBox}>
                <li className={heroStyles.liBox}>
                  <Link className={heroStyles.linkBox} href={`/autor/luiz`} title='Acessar perfil do autor'>
                    <Image src={iconUser} alt='ícone de usuário' />
                    <span className={heroStyles.spanBox}>admin</span>
                  </Link>
                </li>
                <li className={heroStyles.liBox}>
                  <Image src={iconTime} alt='Ícone de um relógio' />
                  <span className={heroStyles.spanBox}>10, junho. 2023</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="content">

          </div>
      </div>
    </RenderComputed>
  )
}
