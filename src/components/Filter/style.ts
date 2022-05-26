import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 1rem;
  max-width: 1100px;
  height: 7rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .radio {
    display: inline;
    margin: 0.5rem;
    input[type="radio"] {
      position: relative;
      opacity: 0;
      + .radio-label {
        color: #9b9b9b;
        &:before {
          content: "";
          background: var(--shape);
          border-radius: 100%;

          display: inline-block;
          width: 1.4em;
          height: 1.4em;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          color: #38caef;
          font-weight: 700;
          &:before {
            background-color: #38caef;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            gap: 3px;
            outline: #38caef;
            border-color: #38caef;
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }

  .form__group {
    position: relative;
    padding: 20px 0 0;
    margin-top: 10px;
    width: 100%;
    max-width: 180px;
  }

  .form__field {
    -webkit-appearance: none;
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #38caef;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }

  .select-label {
    font-size: 1rem;
    color: #9b9b9b;
    font-weight: 500;
    padding-right: 0.7rem;
  }
  .select-input {
    font-size: 1rem;
    height: 1.5rem;
    background: var(--shape);
    border: none;
    color: #fff;
    line-height: 1rem;
  }
`;
