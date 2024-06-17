import SectionPlaylists from '@/components/Home/SectionPlaylists'
import SectionArtigosRelacionados from '@/components/SingleTypePost/ArticlesRelacionados'
import HeroPost from '@/components/SingleTypePost/HeroPost'
import React from 'react'

export default function SinglePost({ params }) {
  return (
    <>
      <div>
        <h1>Post referente a {params.id}</h1>
      </div>
      <HeroPost />
      <SectionArtigosRelacionados />
      <SectionPlaylists />
    </>
  )
}
