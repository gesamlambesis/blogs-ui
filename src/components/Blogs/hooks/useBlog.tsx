import { useEffect, useState } from 'react'

// Blog interface and schema
export interface IBlog {
  _id?: string
  title: string
  description: string
  insertedAt?: string
}

export const useBlog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:3000/api/blogs/')
      const data = await response.json()

      setBlogs([...data])
    }

    fetchBlogs()
  }, [])

  const handleOnSave = async (form: IBlog) => {
    const url = 'http://localhost:3000/api/blogs/'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const result = await response.json()

      setBlogs((prevBlogs) => [result, ...prevBlogs])

      return true
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnDelete = async (blogId: string) => {
    const url = `http://localhost:3000/api/blogs/${blogId}`

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      setBlogs((prevData) => prevData.filter((item) => item._id !== blogId))

      return true
    } catch (error) {
      console.error(error)
    }
  }

  return {
    blogs,
    handleOnSave,
    handleOnDelete,
  }
}
