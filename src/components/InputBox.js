import React from "react"
import { InputStyledBox, InputStyledLinks } from "../style"

export const [InputBox, InputSubmitButton] = [
  ({ type, name, content, ...rest }) => (
    <InputStyledBox>
      <input type={type} name={name} {...ReadableStream} required />
      <span>{content}</span>
      <i></i>
    </InputStyledBox>
  ),
  () => (
    <InputStyledLinks>
      <a href="#">Mot de passe oublié</a>
      <a href="#">S"inscire</a>
    </InputStyledLinks>
  ),
]
