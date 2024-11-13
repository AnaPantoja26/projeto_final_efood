import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaEscuro: '#E66767',
  branco: '#FFFFFF',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}
    body {
    background-color: ${cores.begeClaro};
    color: ${cores.rosaEscuro};
    }
`
// export const Container = styled.div`
//   max-width: 1024px;
//   min-width: 375px;
//   width: 100%;
//   margin: 0 auto;

//   @media screen and (max-width: ${temas.breakpoints.mobile}) {
//     display: flex;
//     flex-direction: column;
//     gap: 72px;
//   }
// `
