import { useState } from "react"

export default (initialState, callback) => {
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = e => setFormData({ ...formData, [e?.target?.name]: e?.target?.value });

  const handleSubmit = e => {
    e.preventDefault();
    callback?.(formData);
  }
  return {
    formData, handleInputChange, handleSubmit
  }
}