import { useEffect, useState } from 'react'

import CardsHome from '../../components/Home/CardsHome'
import Footer from '../../components/Footer'
import HeaderHome from '../../components/Home/HeaderHome'

type Produto = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco?: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [cardsHome, setCardsHome] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardsHome(res))
  }, [])

  return (
    <>
      <HeaderHome />
      <CardsHome produtos={cardsHome} />
      <Footer />
    </>
  )
}

export default Home
