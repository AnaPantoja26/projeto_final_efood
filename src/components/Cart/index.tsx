import {
  Button,
  ButtonCart,
  CartContainer,
  CartItem,
  Overlay,
  PrecoCart,
  Sidebar,
  TextoCart
} from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((produto) => (
            <CartItem key={produto.id}>
              <img src={produto.foto} />
              <div>
                <h3>{produto.nome}</h3>
                <span>R$ {produto.preco}</span>
              </div>
              <Button
                onClick={() => removeItem(produto.id)}
                title="Clique aqui para excluir a compra"
                type="button"
              >
                <img src={lixeira} />
              </Button>
            </CartItem>
          ))}
        </ul>
        <PrecoCart>
          <TextoCart>Valor total</TextoCart>
          <TextoCart>{formataPreco(getTotalPrice())}</TextoCart>
        </PrecoCart>
        <ButtonCart
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a entrega
        </ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
