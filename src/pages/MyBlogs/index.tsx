import BlogDialogForm from '../../components/BlogDialogForm'
import { useState } from 'react'
import { useBlog } from '../../components/Blogs/hooks/useBlog'
import BlogTable from '../../components/BlogTable'
import { Button } from '@mui/material'
import ConfirmationDialog from '../../components/ConfirmationDialog'

import { Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ButtonContainer, Container } from './styles'

const MyBlogs = () => {
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [blogIdSelected, setBlogIdSelected] = useState<string | undefined>(
    undefined
  )
  const { blogs, handleOnDelete, handleOnSave } = useBlog()

  const handleOpenBlogForm = () => {
    setShowBlogForm(!showBlogForm)
  }

  const handleOnDeleteBlog = async () => {
    if (blogIdSelected) {
      const response = await handleOnDelete(blogIdSelected)

      if (response) {
        setSnackbarMessage('Blog successfully deleted')
        setSnackbarOpen(true)
        setShowConfirmDialog(false)
      }
    }
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <Container
    >
      <ButtonContainer>
        <Button variant="contained" onClick={handleOpenBlogForm}>
          Create new blog
        </Button>
      </ButtonContainer>

      <BlogTable
        data={blogs}
        onEdit={() => {}}
        onDelete={(id) => {
          setShowConfirmDialog(true)
          setBlogIdSelected(id)
        }}
        onView={() => {}}
      />

      {showBlogForm && (
        <BlogDialogForm
          handleOpenBlogForm={handleOpenBlogForm}
          handleOnSave={(form) => {
            handleOnSave(form)
            setSnackbarMessage('Blog successfully created')
            setSnackbarOpen(true)
            setShowConfirmDialog(false)
          }}
        />
      )}

      {showConfirmDialog && (
        <ConfirmationDialog
          open={showConfirmDialog}
          title={'Delete Blog'}
          content={'Are you sure to delete this blog?'}
          onConfirm={() => {
            handleOnDeleteBlog()
          }}
          onCancel={() => {}}
        />
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  )
}

export default MyBlogs
