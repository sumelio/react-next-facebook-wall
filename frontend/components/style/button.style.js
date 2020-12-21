import styled from 'styled-components'

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${(props) =>
    props.justify === 'left' ? 'flex-start' : 'flex-end'};
  align-items: flex-end;
  align-content: flex-start;
  width: 100%;
`
export const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 0.2rem 0;
  margin: 1rem 0 0.1rem 0.6rem;
  width: 10rem;
  height: 2.8rem;
  background: transparent;
  border: 2px solid #b5b5b5;
  background-color: #e9e8e8;
  :disabled {
    cursor: 'not-allowed'
  };
`