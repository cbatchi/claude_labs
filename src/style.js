import styled from "styled-components"

export const [
  AppStyled,
  AppStyledContainer,
  AppStyledForm,
  InputStyledBox,
  InputStyledLinks,
] = [
  /** AppStyled */
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #23242a;
  `,

  /** AppStyledContainer */
  styled.div`
    position: relative;
    height: 420px;
    width: 380px;
    background-color: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 380px;
      height: 420px;
      background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
      transform-origin: bottom right;
      animation: animate 6s linear infinite;
      @keyframes animate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    &::after {
      animation-delay: -3s;
    }
  `,

  /** AppStyledForm */
  styled.form`
    inset: 2px;
    z-index: 10;
    position: absolute;
    background-color: #28292d;
    border-radius: 8px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;

    h2 {
      color: #45f3ff;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.1em;
    }

    input[type="submit"] {
      border: none;
      outline: none;
      background-color: #45f3ff;
      width: 100px;
      margin-top: 50px;
      padding: 10px 25px;
      text-transform: capitalize;
      font-weight: 600;
      cursor: pointer;
      border-radius: 4px;
      position: relative;
      display: flex;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        transform-origin: bottom right;
        animation: animate 6s linear infinite;
        @keyframes animate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  `,

  /** InputStyledBox */
  styled.div`
    position: relative;
    width: 300px;
    margin-top: 35px;

    /* Span element contain inside inputstyledBox */
    input {
      position: relative;
      width: 100%;
      padding: 20px 10px 10px;
      background: transparent;
      outline: none;
      border: none;
      color: #23242a;
      font-size: 1rem;
      letter-spacing: 0.05rem;
      z-index: 10;

      &:valid ~ span,
      &:focus ~ span {
        color: #45f3ff;
        transform: translateX(0px) translateY(-34px);
        font-size: 0.75rem;
        text-transform: capitalize;
        padding-bottom: 10px;
        display: inline-block;
      }
      &:valid ~ i,
      &:focus ~ i {
        height: 44px;
      }
    }

    span {
      position: absolute;
      left: 0;
      padding: 20px 0px 10px;
      font-size: 1rem;
      color: #8f8f8f;
      pointer-events: none;
      letter-spacing: 0.05rem;
      transition: 0.5s;
    }

    i {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #45f3ff;
      border-radius: 4px;
      transition: 0.5s;
      pointer-events: none;
      z-index: 9;
    }
  `,

  /** InputStyledLinks */
  styled.div`
    display: flex;
    justify-content: space-between;

    a {
      margin: 10px 0;
      font-size: 0.75rem;
      color: #8f8f8f;
      text-decoration: none;

      &:hover,
      &:nth-child(2) {
        color: #45f3ff;
      }
    }
  `,
]
