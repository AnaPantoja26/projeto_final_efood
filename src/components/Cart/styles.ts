import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 100%;
  max-width: 360px;
  display: block;
  height: 100%;
`

export const CartItem = styled.li`
  position: relative;
  align-items: flex-start;
  display: flex;
  background-color: ${cores.bege};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  width: 100%;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    flex-grow: 1;
  }

  h3 {
    color: ${cores.begeClaro}
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  span {
    display: block;
    color: ${cores.begeClaro}
      font-weight: bold;
      font-size: 14px;
  }
`
export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const ButtonCart = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  border: none;
  cursor: pointer;
  width: 100%;
  height: 24px;
  margin-top: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`
export const PrecoCart = styled.div`
  color: ${cores.begeClaro};
  width: 100%;
  height: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;
`

export const TextoCart = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.begeClaro};
`

export const CartEntrega = styled.div`
  display: block;
  background-color: ${cores.rosaEscuro};
  color: ${cores.bege};
  width: 100%;

  h2 {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
  }

  label {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
  }

  input {
    background-color: ${cores.bege};
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    border: none;
  }

  .cep-numero-container {
    display: flex;
    gap: 16px;
    width: 100%;
  }

  .cep-container,
  .numero-container {
    flex: 1;
  }

  .cep-container {
    margin-right: 16px;
  }

  .cep-container input,
  .numero-container input {
    width: 100%;
  }
`
export const BotaoPagamento = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  display: block;
  width: 100%;
  padding: 4px;
  margin-top: 16px;
  margin-bottom: 8px;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
`
export const BotaoCarrinho = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  display: block;
  width: 100%;
  padding: 4px;
  margin-bottom: 8px;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
`
export const CartPagamento = styled.div`
  color: ${cores.bege};

  h2 {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 19px;
  }

  label {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
  }

  input {
    background-color: ${cores.bege};
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    border: none;
  }

  .numero-cvv-container {
    display: flex;
    gap: 30px;
  }

  .numero-container {
    width: 460px;
  }

  .vencimento-container {
    display: flex;
    gap: 30px;
    //     width: 100%;
  }
`
export const CartCompra = styled.div`
  color: ${cores.bege};

  h2 {
    width: 219px;
    height: 19px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  p {
    width: 344px;
    height: 286px;
    margin-top: 16px;
    margin-bottom: 24px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-color: ${cores.bege};
    color: ${cores.rosaEscuro};
    display: block;
    width: 100%;
    padding: 4px;
    margin-bottom: 8px;
    border: none;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    cursor: pointer;
  }
`
