import { Fundo, Titulo, SubTitulo } from './styles'
import vetorFundo from '../../../assets/images/Vector.png'
import logo from '../../../assets/images/logo.svg'
import { useState } from 'react'
import { open } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

const HeaderPerfil = () => {
  const [voltar] = useState(true)
  const clicar = () => {
    if (voltar) {
      window.history.back()
    }
  }
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Fundo style={{ backgroundImage: `url(${vetorFundo})` }}>
        <Titulo style={{ cursor: 'pointer' }} onClick={clicar}>
          Restaurante
        </Titulo>
        <img src={logo} alt="Logo" />
        <SubTitulo style={{ cursor: 'pointer' }} onClick={openCart}>
          {items.length} produto(s) no carrinho
        </SubTitulo>
      </Fundo>
    </>
  )
}

export default HeaderPerfil
