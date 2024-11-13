import Produto from '../../../models/Produto'
import Cards from '../Cards'
import { List, ListCard } from './styles'

export type Props = {
  produtos: Produto[]
}

const CardsHome = ({ produtos }: Props) => (
  // <section>
  <ListCard>
    <List>
      {produtos.map((produto) => (
        <Cards
          key={produto.id}
          titulo={produto.titulo}
          destacado={produto.destacado}
          tipo={produto.tipo}
          avaliacao={produto.avaliacao}
          descricao={produto.descricao}
          capa={produto.capa}
        />
      ))}
    </List>
  </ListCard>
  // </section>
)

export default CardsHome
