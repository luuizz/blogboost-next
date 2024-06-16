import SectionPlaylists from '@/components/Home/SectionPlaylists'
import SectionArtigosRelacionados from '@/components/SingleTypePost/ArticlesRelacionados'
import HeroPost from '@/components/SingleTypePost/HeroPost'
import React from 'react'

export default function SinglePost({ params }) {
  return (
    <>
      <HeroPost />
      <SectionArtigosRelacionados />
      <SectionPlaylists />
    </>
  )
}
