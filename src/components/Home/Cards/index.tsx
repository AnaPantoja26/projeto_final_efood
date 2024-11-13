import {
  Botao,
  Card,
  CardImg,
  Descricao,
  Infos,
  LogoNota,
  Nota,
  TagDestaque,
  Titulo
} from './styles'
import { Link } from 'react-router-dom'
import nota from '../../../assets/images/Page-1.png'
import Tag from '../Tag'

type Props = {
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Cards = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  return (
    <Card>
      <CardImg src={capa} alt="Restaurante em destaque" />
      <Titulo>
        {titulo}
        <Nota>
          {avaliacao}
          <LogoNota src={nota} alt="avaliação" />
        </Nota>
      </Titulo>
      <Infos>
        <TagDestaque isDestaque={destacado}>
          {destacado ? 'Destaque da semana' : ''}
        </TagDestaque>
        <Tag>{tipo}</Tag>
      </Infos>
      <Descricao>{descricao}</Descricao>
      <Botao>
        <Link to="/perfil/:id">Saiba Mais</Link>
      </Botao>
    </Card>
  )
}

export default Cards

//perguntar aos tutores como fazer para aparecer e integrar um booleano ao projeto?
