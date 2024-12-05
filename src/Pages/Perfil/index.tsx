import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import fechar from '../../assets/images/close.png'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import Footer from '../../components/Footer'
import {
  Botao,
  BotaoCard,
  CardCategories,
  Colunas,
  HeaderCard,
  ImagemCategories,
  ImagemHero,
  Modal,
  ModalCard,
  ModalContent,
  Paragrafo,
  ParagrafoCard,
  SubTitulo,
  TituloCard,
  TituloCategories,
  TituloHero,
  Image
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Produto from '../../models/Produto'

type Parametro = {
  id: number
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const produto: Produto = {
  id: 0,
  titulo: '',
  destacado: false,
  tipo: '',
  avaliacao: 0,
  descricao: '',
  capa: '',
  cardapio: [
    {
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    }
  ]
}

const Perfil = () => {
  const { id } = useParams() as unknown as Parametro
  const [cardsRestaurantes, setCardsRestaurantes] = useState<Restaurante>()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [cardSelecionado, setCardSelecionado] = useState<Cardapio | null>(null)
  const [cardsCardapio, setCardsCardapio] = useState<Cardapio[]>([])
  const [buttonText, setButtonText] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setCardsRestaurantes(res)
        setCardsCardapio(res.cardapio)
      })
  }, [id])

  const abrirModal = (item: Cardapio) => {
    setCardSelecionado(item)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setCardSelecionado(null)
  }

  const handleMouseEnter = (id: number) => {
    setButtonText((prev) => ({
      ...prev,
      [id]: 'Mais detalhes'
    }))
  }

  const handleMouseLeave = (id: number) => {
    setButtonText((prev) => ({
      ...prev,
      [id]: 'Adicionar ao carrinho'
    }))
  }

  // const handleClick = (id: number) => {
  //   setModalEstaAberto(true)
  // }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(open())
  }

  return (
    <>
      <HeaderPerfil />
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <HeaderCard>
            <img src={fechar} alt="Fechar" onClick={fecharModal} />
          </HeaderCard>

          {cardSelecionado ? (
            <ModalCard key={cardSelecionado.id}>
              <div>
                <Image src={cardSelecionado.foto} />
              </div>
              <div>
                <TituloCard>{cardSelecionado.nome}</TituloCard>
                <ParagrafoCard>
                  {cardSelecionado.descricao}
                  <br />
                  <br />
                  Serve de {cardSelecionado.porcao}
                </ParagrafoCard>
                <BotaoCard onClick={addToCart}>
                  Adicionar ao carrinho - R${cardSelecionado.preco}0
                </BotaoCard>
              </div>
            </ModalCard>
          ) : (
            <p>Carregando...</p>
          )}
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
      <section>
        {cardsRestaurantes?.capa ? (
          <ImagemHero
            style={{ backgroundImage: `url(${cardsRestaurantes?.capa})` }}
          >
            <TituloHero>{cardsRestaurantes?.tipo}</TituloHero>
            <SubTitulo>{cardsRestaurantes?.titulo}</SubTitulo>
          </ImagemHero>
        ) : (
          <p>Carregando imagem...</p>
        )}
      </section>
      <section>
        {cardsCardapio ? (
          <Colunas>
            {cardsCardapio.map((item) => (
              <CardCategories key={item.id}>
                {item.foto ? (
                  <ImagemCategories src={item.foto} alt="Imagem do cardápio" />
                ) : (
                  <p>Carregando imagem do cardápio...</p>
                )}
                {item.nome ? (
                  <TituloCategories>{item.nome}</TituloCategories>
                ) : (
                  <p>Carregando título do cardápio...</p>
                )}
                <Paragrafo>{item.descricao}</Paragrafo>
                <Botao
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                  onClick={() => abrirModal(item)}
                >
                  {buttonText[item.id] || 'Adicionar ao carrinho'}
                </Botao>
              </CardCategories>
            ))}
          </Colunas>
        ) : (
          <p>Carregando cardápios...</p>
        )}
      </section>
      <Footer />
    </>
  )
}

export default Perfil
