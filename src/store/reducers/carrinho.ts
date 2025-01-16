import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Produto extends Cardapio {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
}

type CarrinhoState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  items: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)
      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    }
  }
})

export const { add, open } = carrinhoSlice.actions
export default carrinhoSlice.reducer
