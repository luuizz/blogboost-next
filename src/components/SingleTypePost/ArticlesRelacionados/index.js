import RenderComputed from '@/components/RenderComputed'
import TopSection from '@/components/TopSection'
import React from 'react'

export default function SectionArtigosRelacionados() {
  return (
    <RenderComputed asElement="section">
      <div className="container">
        <TopSection titulo="Artigos semelhantes" />
      </div>
    </RenderComputed>
  )
}
