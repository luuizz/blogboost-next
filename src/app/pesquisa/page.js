'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PesquisaPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get('s');


  return (
    <h1>Resultados da Pesquisa para "{search}" </h1>
  )
}
