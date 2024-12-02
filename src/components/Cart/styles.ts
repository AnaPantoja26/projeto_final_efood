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
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  position: relative;
  align-items: flex-start;
  display: flex;
  background-color: ${cores.bege};
  padding: 8px 109px 12px 8px;
  margin-bottom: 16px;

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
