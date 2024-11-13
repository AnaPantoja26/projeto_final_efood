import Produto from '../../../models/Produto'
import { Imagem, SubTitulo, Titulo } from './styles'

export type Props = {
  produtos: Produto[]
}

const HeroPerfil = ({ produtos }: Props) => {
  return (
    <>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <Imagem style={{ backgroundImage: `url(${produto.capa})` }}>
              <Titulo>{produto.tipo}</Titulo>
              <SubTitulo>{produto.titulo}</SubTitulo>
            </Imagem>
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroPerfil
