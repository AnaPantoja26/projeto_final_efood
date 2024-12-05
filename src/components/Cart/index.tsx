import { Button, CartContainer, CartItem, Overlay, Sidebar } from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((produto) => (
            <CartItem key={produto.id}>
              <img src={produto.cardapio[0].foto} />
              <div>
                <h3>{produto.cardapio[0].nome}</h3>
                <span>R$ {produto.cardapio[0].preco}</span>
              </div>
              <Button title="Clique aqui para excluir a compra" type="button">
                <img src={lixeira} />
              </Button>
            </CartItem>
          ))}
        </ul>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
