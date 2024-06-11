import React from 'react'
import RenderComputed from '../RenderComputed'
import CardPostLG from './CardPostLG/CardPostLG'
import CardPostXS from './CardPostXS/CardPostXS'
import { postPopulars } from '@/app/data'
import { stlyes } from './style.css'

export default function SectionHeroHome() {
  return (
    <RenderComputed asElement="section" asStyle={stlyes.heroPost}>
      <div className={`${stlyes.containerHero} container`}>
        <div className={stlyes.leftContainer}>
          <div className={stlyes.titleLeft}>
            <h1 className='category'>tech blog</h1>
            <h2 className={stlyes.h2}>Em destaque</h2>
          </div>

          <CardPostLG />
        </div>

        <div className={stlyes.rightContainer}>
          <h4>Mais populares</h4>
          <div className={stlyes.allCards}>
            {
              postPopulars.map((item, index) => (
                <div className={stlyes.itemPost} key={index}>
                  <CardPostXS 
                  href={item.path} 
                  alt={item.alt}
                  category={item.category}
                  date={item.date}
                  readingTime={item.reading}
                  name={item.title}
                  src={item.image}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </RenderComputed>
  )
}
