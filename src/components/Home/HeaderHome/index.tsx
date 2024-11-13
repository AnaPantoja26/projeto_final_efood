import { Fundo, Logo, LogoImg, SubTitle } from './styles'
import fundo from '../../../assets/images/Vector.png'
import logo from '../../../assets/images/logo.svg'

const HeaderHome = () => (
  <Fundo style={{ backgroundImage: `url(${fundo})` }}>
    <Logo className="container">
      <LogoImg src={logo} alt="EFOOD" />
      <SubTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </SubTitle>
    </Logo>
  </Fundo>
)

export default HeaderHome
