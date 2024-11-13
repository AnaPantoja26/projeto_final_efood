import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  placeholder?: string
  style?: React.CSSProperties
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
