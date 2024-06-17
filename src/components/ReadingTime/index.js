import React from 'react'
import { styles } from '../Home/SectionHero/CardPostXS/style.css';

function calculateReadingTime(content) {
  const wordsPerMinute = 200; // Média de 200 palavras por minuto
  let text = '';

  if (Array.isArray(content)) {
    content.forEach(block => {
      if (block && (block.type === 'paragraph' || block.type === 'heading')) {
        if (Array.isArray(block.children)) {
          block.children.forEach(child => {
            if (child && child.type === 'text') {
              text += ' ' + child.text;
            }
          });
        }
      }
    });
  }

  const wordCount = text.trim().split(/\s+/).length;
  const readingTimeSeconds = Math.ceil((wordCount / wordsPerMinute) * 60);
  const minutes = Math.floor(readingTimeSeconds / 60);
  const seconds = readingTimeSeconds % 60;

  if (minutes >= 1) {
    return `${minutes}min de leitura`;
  } else if (seconds >= 1) {
    return `${seconds}s de leitura`;
  } else {
    return '0 s de leitura';
  }
}


export default function ReadingTime({ content }) {
  const readingTime = calculateReadingTime(content);
  return (
    <span className={styles.span}>{readingTime}</span>
  )
}
