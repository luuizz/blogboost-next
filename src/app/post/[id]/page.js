import React from 'react'

export default function SinglePost({ params }) {
  return (
    <section>
        <div className="container">
            <h1>Sou um grande post! <span style={{color: "red"}}>{params.id}</span></h1>
        </div>
    </section>
  )
}
