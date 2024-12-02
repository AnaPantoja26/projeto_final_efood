import { Button, CartContainer, CartItem, Overlay, Sidebar } from './styles'
import prato from '../../assets/images/pizza marguerita.png'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={prato} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <Button title="Clique aqui para excluir a compra" type="button">
              <img src={lixeira} />
            </Button>
          </CartItem>
        </ul>
        <ul>
          <CartItem>
            <img src={prato} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <Button title="Clique aqui para excluir a compra" type="button">
              <img src={lixeira} />
            </Button>
          </CartItem>
        </ul>
        <ul>
          <CartItem>
            <img src={prato} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <Button title="Clique aqui para excluir a compra" type="button">
              <img src={lixeira} />
            </Button>
          </CartItem>
        </ul>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
