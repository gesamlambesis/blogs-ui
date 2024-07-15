import { useNavigate } from 'react-router-dom'
import { useBlog } from './hooks/useBlog'
import Divider from '@mui/material/Divider'

const Blogs = () => {
  const { blogs } = useBlog()

  const navigate = useNavigate()

  const handleClick = (title: string, description: string) => {
    navigate(`/blog?title=${title}&description=${description}`)
  }

  return (
    <div style={{ padding: '20px' }}>
      {blogs.map((blog) => (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleClick(blog.title, blog.description)
          }}
        >
          <h2>{blog.title}</h2>
          <h3>{blog.description}</h3>

          <Divider />
        </div>
      ))}
    </div>
  )
}

export default Blogs
