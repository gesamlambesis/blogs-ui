// TableComponent.js
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { IBlog } from '../Blogs/hooks/useBlog'

interface BlogTableInterface {
  data: IBlog[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  onView: (id: string) => void
}

const BlogTable: React.FC<BlogTableInterface> = ({
  data,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onView(row._id ?? '')} color="primary">
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => onEdit(row._id ?? '')} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(row._id ?? '')} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BlogTable
