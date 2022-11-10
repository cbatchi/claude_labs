import React from "react"
import { InputBox } from "./components/InputBox"
import useForm from "./hooks/useForm"
import { AppStyled, AppStyledContainer, AppStyledForm } from "./style"

const App = () => {
  const { data, handleInput, handleSubmit } = useForm(
    {
      username: "",
      password: "",
    },
    (value) => {
      console.log(value)
    }
  )
  return (
    <AppStyled>
      <AppStyledContainer>
        <AppStyledForm onSubmit={handleSubmit}>
          <h2>Se connecter</h2>
          <InputBox
            type="text"
            name="username"
            content="username"
            value={data.username}
            onChange={handleInput}
          />
          <InputBox
            type="password"
            name="password"
            content="password"
            value={data.password}
            onChange={handleInput}
          />
          <input type="submit" value="login" />
        </AppStyledForm>
      </AppStyledContainer>
    </AppStyled>
  )
}

export default App
