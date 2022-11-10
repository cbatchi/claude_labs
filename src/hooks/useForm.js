import { useState } from "react";

export default (initialState, callback) => {
  const [data, setData] = useState(initialState)

  const [handleInput, handleSubmit] = [
    (e) => setData({ ...data, [e.target.name]: e.target.value }),
    (e) => {
      e.preventDefault()
      callback?.(data)
    },
  ]
  return { data, handleInput, handleSubmit }
}
