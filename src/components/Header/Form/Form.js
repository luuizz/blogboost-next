import React from 'react'
import RenderComputed from '../../RenderComputed'
import iconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import { styles } from './style.css'

export default function Form() {
  return (
    <RenderComputed asElement='form' asStyle={styles.form}>
        <input className={styles.input} type="text" placeholder='Pesquise por artigo ou tema' name='s' />
        <button className={styles.button} type='submit'>
            <Image src={iconSearch} alt='Ícone de uma lupa' />
        </button>
    </RenderComputed>
  )
}
