import { useState } from "react"

const useForm = (initialState, callback) => {
  const [data, setData] = useState(initialState)
  const handleInput = (e) =>
    setData({ ...data, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    callback?.(data)
  }

  return { data, handleInput, handleSubmit }
}

export default useForm
