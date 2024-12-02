import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedProduto: builder.query<Produto, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedProdutoQuery } = api

export default api
