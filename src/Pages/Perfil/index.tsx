import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import pizza from '../../assets/images/pizza marguerita 3.png'
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

const Perfil = () => {
  const { id } = useParams() as unknown as Parametro
  const [cardsRestaurantes, setCardsRestaurantes] = useState<Restaurante>()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [buttonText, setButtonText] = useState('Adicionar ao carrinho')
  const [cardsCardapio, setCardsCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setCardsRestaurantes(res)
        setCardsCardapio(res.cardapio)
      })
  }, [id])

  return (
    <>
      <HeaderPerfil />
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <HeaderCard>
            <img
              src={fechar}
              alt="Fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </HeaderCard>
          {cardsCardapio.map((item) => (
            <ModalCard key={item.id}>
              <div>
                <Image src={item.foto} />
              </div>
              <div>
                <TituloCard>{item.nome}</TituloCard>
                <ParagrafoCard>
                  {item.descricao}
                  <br></br>
                  <br></br>
                  Serve de {item.porcao}
                </ParagrafoCard>
                <BotaoCard>Adicionar ao carrinho - R${item.preco}0</BotaoCard>
              </div>
            </ModalCard>
          ))}
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
                  onMouseEnter={() => setButtonText('Mais detalhes')}
                  onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
                  onClick={() => setModalEstaAberto(true)}
                >
                  {buttonText}
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
