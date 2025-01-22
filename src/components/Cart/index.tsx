import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { ChangeEvent } from 'react'

import {
  BotaoPagamento,
  BotaoCarrinho,
  ButtonCart,
  CartContainer,
  CartEntrega,
  CartItem,
  Overlay,
  PrecoCart,
  Sidebar,
  TextoCart,
  CartPagamento,
  CartCompra,
  Button
} from './styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface FormValues {
  nome: string
  cep: string
  numero: string
  endereco: string
  cidade: string
}

const Cart = () => {
  const [isEntregaAtiva, setIsEntregaAtiva] = useState(false)
  const [isPagamentoAtivo, setIsPagamentoAtivo] = useState(false)
  const [isFinalizado, setIsFinalizado] = useState(false)
  const [confirmacao, setConfirmacao] = useState<any>(null)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const itensSalvos = Array.isArray(items) ? items : []

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.preco!,
      0
    )
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const continuarComEntrega = () => {
    setIsEntregaAtiva(true)
  }

  const continuarComPagamento = async (values: FormValues) => {
    setIsPagamentoAtivo(true)
  }

  const voltarParaCarrinho = () => {
    setIsEntregaAtiva(false)
  }

  const voltarParaEntrega = () => {
    setIsPagamentoAtivo(false)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const finalizarCompra = async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/checkout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          products: items,
          delivery: {
            receiver: 'Nome do recebedor',
            address: {
              description: 'Rua Exemplo',
              city: 'Cidade Exemplo',
              zipCode: '12345-678',
              number: 123,
              complement: 'Apto 1'
            }
          },
          payment: {
            card: {
              name: 'Nome no Cartão',
              number: '1234567812345678',
              code: 123,
              expires: {
                month: 12,
                year: 2025
              }
            }
          }
        })
      }
    )

    const data = await response.json()

    setConfirmacao(data)

    setIsFinalizado(true)
  }

  const validationSchema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    cep: Yup.string()
      .required('CEP é obrigatório')
      .test('valid-cep', 'CEP inválido', (value) => {
        if (!value) return false
        const unmaskedValue = value.replace(/[^\d]/g, '')
        return unmaskedValue.length === 8
      }),
    numero: Yup.string().required('Número é obrigatório'),
    endereco: Yup.string().required('Endereço é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória')
  })

  const validationSchemaPagamento = Yup.object({
    nomeCartao: Yup.string().required('Nome no cartão é obrigatório'),
    numeroCartao: Yup.string()
      .required('Número do cartão é obrigatório')
      .matches(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos'),
    cvv: Yup.string()
      .required('CVV é obrigatório')
      .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
    mes: Yup.string()
      .required('Mês de vencimento é obrigatório')
      .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
    anoVencimento: Yup.string()
      .required('Ano de vencimento é obrigatório')
      .matches(/^\d{4}$/, 'Ano inválido')
      .test(
        'valid-year',
        'Ano de vencimento não pode ser no passado',
        (value) => {
          const currentYear = new Date().getFullYear()
          return Number(value) >= currentYear
        }
      )
  })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isFinalizado ? (
          <CartCompra>
            <h2>Pedido Confirmado - ORDER_ID</h2>
            <div>
              {confirmacao && (
                <>
                  <p>
                    <strong>Produtos:</strong>
                  </p>
                  <ul>
                    {confirmacao.products.map((product: any) => (
                      <li key={product.id}>
                        Produto ID: {product.id}, Preço:{' '}
                        {formataPreco(product.price)}
                      </li>
                    ))}
                  </ul>

                  <p>
                    <strong>Entrega:</strong>
                  </p>
                  <p>Recebedor: {confirmacao.delivery.receiver}</p>
                  <p>
                    Endereço: {confirmacao.delivery.address.description},{' '}
                    {confirmacao.delivery.address.number},{' '}
                    {confirmacao.delivery.address.city} -{' '}
                    {confirmacao.delivery.address.zipCode}
                  </p>

                  <p>
                    <strong>Pagamento:</strong>
                  </p>
                  <p>Nome no Cartão: {confirmacao.payment.card.name}</p>
                  <p>
                    Últimos 4 dígitos do cartão:{' '}
                    {confirmacao.payment.card.number.slice(-4)}
                  </p>
                  <p>
                    Vencimento: {confirmacao.payment.card.expires.month}/
                    {confirmacao.payment.card.expires.year}
                  </p>
                </>
              )}
            </div>
            <button type="submit">Concluir</button>
          </CartCompra>
        ) : isPagamentoAtivo ? (
          <CartPagamento>
            <h2>
              Pagamento - Valor a pagar R$ {formataPreco(getTotalPrice())}
            </h2>
            <Formik
              initialValues={{
                nomeCartao: '',
                numeroCartao: '',
                cvv: '',
                mes: '',
                anoVencimento: ''
              }}
              validationSchema={validationSchemaPagamento}
              onSubmit={finalizarCompra}
            >
              {({ isValid, isSubmitting }) => (
                <Form>
                  <label htmlFor="nomeCartao">Nome no cartão</label>
                  <Field
                    id="nomeCartao"
                    name="nomeCartao"
                    placeholder="Digite o nome"
                  />
                  <ErrorMessage name="nomeCartao" component="div" />

                  <div className="numero-cvv-container">
                    <div className="numero-container">
                      <label htmlFor="numeroCartao">Número do cartão</label>
                      <Field
                        id="numeroCartao"
                        name="numeroCartao"
                        placeholder="Digite o número"
                        maxLength={16}
                      />
                      <ErrorMessage name="numeroCartao" component="div" />
                    </div>
                    <div className="cvv-container">
                      <label htmlFor="cvv">CVV</label>
                      <Field
                        id="cvv"
                        name="cvv"
                        placeholder="xxx"
                        maxLength={3}
                      />
                      <ErrorMessage name="cvv" component="div" />
                    </div>
                  </div>

                  <div className="vencimento-container">
                    <div>
                      <label htmlFor="mes">Mês de vencimento</label>
                      <Field
                        id="mes"
                        name="mes"
                        placeholder="xx"
                        maxLength={2}
                      />
                      <ErrorMessage name="mes" component="div" />
                    </div>
                    <div>
                      <label htmlFor="anoVencimento">Ano de vencimento</label>
                      <Field
                        id="anoVencimento"
                        name="anoVencimento"
                        placeholder="xxxx"
                        maxLength={4}
                      />
                      <ErrorMessage name="anoVencimento" component="div" />
                    </div>
                  </div>

                  <BotaoPagamento
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    Finalizar pagamento
                  </BotaoPagamento>
                  <BotaoCarrinho type="button" onClick={voltarParaEntrega}>
                    Voltar para a edição de endereço
                  </BotaoCarrinho>
                </Form>
              )}
            </Formik>
          </CartPagamento>
        ) : isEntregaAtiva ? (
          <CartEntrega>
            <h2>Entrega</h2>
            <Formik
              initialValues={{
                nome: '',
                cep: '',
                numero: '',
                endereco: '',
                cidade: ''
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await continuarComPagamento(values)
              }}
            >
              {({ setFieldValue, isValid, isSubmitting }) => (
                <Form>
                  <label htmlFor="nome">Quem irá receber</label>
                  <Field id="nome" name="nome" placeholder="Digite o nome" />
                  <ErrorMessage name="nome" component="div" />

                  <label htmlFor="endereco">Endereço</label>
                  <Field
                    id="endereco"
                    name="endereco"
                    placeholder="Digite o endereço"
                  />
                  <ErrorMessage name="endereco" component="div" />

                  <label htmlFor="cidade">Cidade</label>
                  <Field
                    id="cidade"
                    name="cidade"
                    placeholder="Digite a cidade"
                  />
                  <ErrorMessage name="cidade" component="div" />

                  <div className="cep-numero-container">
                    <div className="cep-container">
                      <label htmlFor="cep">CEP</label>
                      <Field
                        id="cep"
                        name="cep"
                        placeholder="Digite o CEP"
                        component={InputMask}
                        mask="99999-999"
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const value = e.target.value
                          setFieldValue('cep', value)
                        }}
                      />
                      <ErrorMessage name="cep" component="div" />
                    </div>
                    <div className="numero-container">
                      <label htmlFor="numero">Número</label>
                      <Field
                        id="numero"
                        name="numero"
                        placeholder="Digite o número"
                      />
                      <ErrorMessage name="numero" component="div" />
                    </div>
                  </div>

                  <label htmlFor="#">Complemento (opcional)</label>
                  <Field type="text" id="#" name="#" />

                  <BotaoPagamento
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    Continuar com pagamento
                  </BotaoPagamento>

                  <BotaoCarrinho type="button" onClick={voltarParaCarrinho}>
                    Voltar para o carrinho
                  </BotaoCarrinho>
                </Form>
              )}
            </Formik>
          </CartEntrega>
        ) : (
          <div>
            <ul>
              {itensSalvos.length > 0 ? (
                itensSalvos.map((produto) => (
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
                ))
              ) : (
                <p>Não há itens no carrinho</p>
              )}
            </ul>

            <PrecoCart>
              <TextoCart>Valor total</TextoCart>
              <TextoCart>{formataPreco(getTotalPrice())}</TextoCart>
            </PrecoCart>
            <ButtonCart
              onClick={continuarComEntrega}
              title="Clique aqui para continuar com a compra"
              type="button"
              disabled={items.length === 0}
            >
              {isEntregaAtiva ? 'Finalizar compra' : 'Continuar com entrega'}
            </ButtonCart>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
