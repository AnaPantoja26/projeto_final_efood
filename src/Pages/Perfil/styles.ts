import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemHero = styled.div`
  width: auto;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const TituloHero = styled.h2`
  color: ${cores.branco};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  margin-left: 170px;
  padding-top: 20px;
`
export const SubTitulo = styled.h2`
  color: ${cores.branco};
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  margin-left: 170px;
  margin-top: 150px;
`

export const Colunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1366px;
  margin-left: 171px;
  margin-right: 1171px;
  margin-top: 56px;
  margin-bottom: 120px;
`

export const CardCategories = styled.div`
  background-color: ${cores.rosaEscuro};
  margin-top: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 16px;
  height: 400px;
`
export const ImagemCategories = styled.img`
  padding: 8px;
  width: 304px;
  height: 167px;
  object-fit: cover;
`
export const TituloCategories = styled.h2`
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;
`
export const Paragrafo = styled.p`
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
  flex-grow: 1;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  align-text: center;
  border: none;
  text-decoration: none;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;

  transition: background-color 0.5s;
  &:hover {
    background-color: ${cores.bege};
    cursor: pointer;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosaEscuro};
  color: ${cores.begeClaro};
  margin-left: 171px;
  width: 1025px;
  height: 344px;
`
export const ModalCard = styled.div`
  display: flex;
`
export const HeaderCard = styled.header`
  margin: 8px 8px 0 1000px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin: 0 14px 20px 22px;
`
export const TituloCard = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  align-text: center:
  height: 21px;
  margin-top: 5px;
`
export const ParagrafoCard = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  margin-top: 16px;
  width: 656px;
  height: 176px;
  padding-right: 52px;
`
export const BotaoCard = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  align-text: center:
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  text-decoration: none;
  cursor: pointer;
  border: none;
  padding: 4px 7px 4px 7px;
  margin-top: 16px;
`
