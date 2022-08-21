import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 90vw;
  height: 100vh;
  .input-top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 0.5rem;
  }
  .container-data {
    max-width: 90vw;
    width: 60rem;
    overflow: auto;
    padding: 1rem;
  }
`

export const Title = styled.h1`
  padding-top: 5rem;
  padding-bottom: 2rem;
  font-size: 3rem;
  text-transform: uppercase;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 2rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #cacaca;
  outline: none;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.5rem 2rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #cacaca;
  outline: none;
`
export const Button = styled.input`
  width: 100%;
  padding: 0.5rem 2rem;
  margin: 0.8rem 0 2rem;
  border-radius: 5px;
  border: 1px solid #cacaca;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  &:hover {
    background-color: #cacaca;
  }
`
export const List = styled.li`
  list-style: none;
  background-color: aliceblue;
  padding: 1.2rem;
  margin: 0.5rem 0;
  border-radius: 5px;

  p {
    font-size: 1.5rem;
    line-height: 150%;
  }
  .btn-data {
    margin-top: 1rem;
    .btn-del,
    .btn-edit {
      padding: 0.3rem 1.5rem;
      margin-right: 0.5rem;
      border-radius: 5px;
      border: none;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .btn-del {
      background: #ff2d2d;
    }
    .btn-edit {
      background: #0066ff;
    }
  }
`
