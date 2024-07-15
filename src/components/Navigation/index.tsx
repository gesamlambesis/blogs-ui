import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'

const Navigation = () => {
  return (
    <List>
      <ListItem component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/myBlogs">
        <ListItemText primary="My Blogs" />
      </ListItem>
    </List>
  )
}

export default Navigation
