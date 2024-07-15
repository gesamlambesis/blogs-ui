import { useLocation } from 'react-router-dom'
import { Container } from './styles'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const BlogView = () => {
  const query = useQuery()
  const title = query.get('title')
  const description = query.get('description')
  return (
    <Container
    >
      <div style={{ width: '60%' }}>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </Container>
  )
}

export default BlogView
