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

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}
const initialState: CartState = {
  isOpen: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      if (!Array.isArray(state.items)) {
        state.items = []
      }
      const produto = state.items.find((item) => item.id === action.payload.id)
      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      if (Array.isArray(state.items)) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
