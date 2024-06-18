'use client'
import iconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import { styles } from './style.css'
import { useRouter, useSearchParams } from 'next/navigation';

export default function Form() {

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.s.value;
    if (searchQuery) {
      router.push(`/pesquisa?s=${searchQuery}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder='Pesquise por artigo ou tema' name='s' />
        <button className={styles.button} type='submit'>
            <Image src={iconSearch} alt='Ícone de uma lupa' />
        </button>
    </form>
  )
}
