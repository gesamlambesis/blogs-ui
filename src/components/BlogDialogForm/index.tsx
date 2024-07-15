import { Dialog, Input } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { FormContainer } from './styles'

interface BlogDialogFormInterface {
  handleOpenBlogForm: () => void
  handleOnSave: (form: { title: string, description: string}) => void
}

const BlogDialogForm: React.FC<BlogDialogFormInterface> = ({
  handleOpenBlogForm,
  handleOnSave,
}) => {
  const [form, setForm] = useState({ title: '', description: '' })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={true}>
      <FormContainer>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <Input
            title="Title"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleOnChange}
          />
          <Input
            title="Content"
            placeholder="Content"
            name="description"
            value={form.description}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <Button onClick={handleOpenBlogForm}>Cancel</Button>
          <Button
            onClick={() => {
              handleOpenBlogForm()
              handleOnSave(form)
            }}
          >
            Save
          </Button>
        </div>
      </FormContainer>
    </Dialog>
  )
}

export default BlogDialogForm
