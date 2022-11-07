import React from "react"
import useFormHook from "../../hooks/useForm.hook"
import "./maillist.style.css"

const MailListComponent = () => {
  const { formData, handleInputChange, handleSubmit } = useFormHook({ email: null }, dataSubmited => {

  })

  return (
    <div className="mail-list">
      <div className="container">
        <div className="mail-contents">
          <h1 className="mail-content-title">
            Gagnez du temps et de l'argent !
          </h1>
          <span className="mail-content-desc">
            Inscrivez-vous et nous vous enverrons les meilleures offres
          </span>
          <form className="mail-content-field" onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} name="email" placeholder="Votre e-mail" />
            <button type="submit">Inscrivez vous !</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MailListComponent
