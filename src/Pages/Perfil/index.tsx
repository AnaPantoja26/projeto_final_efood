import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import Produto from '../../models/Produto'
import {
  Imagem,
  SubTitulo,
  Titulo
} from '../../components/Perfil/HeroPerfil/styles'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

type Parametro = {
  id: number
}

export type Props = {
  produtos: Produto[]
}

const Perfil = ({ produtos }: Props) => {
  const { id } = useParams() as unknown as Parametro
  const [cardsItaliana, setCardsItaliana] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setCardsItaliana(res))
  })

  return (
    <>
      <HeaderPerfil />
      <div>
        {produtos.map((produto) => (
          <div key={id}>
            <Imagem style={{ backgroundImage: `url(${produto.capa})` }}>
              <Titulo>{produto.tipo}</Titulo>
              <SubTitulo>{produto.titulo}</SubTitulo>
            </Imagem>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Perfil
