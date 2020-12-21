import React from 'react'
import styled from 'styled-components'

// Components
import { Buttons, Button } from '../style/button.style'

const Type = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  border: 2px solid #b5b5b5;
  width: 32vw;
  height: 24vh;
  padding: 10px;
`
const PostType = ({setType, type, setShwoType}) => (
    <>
    <Type>
          <div>
          <input
            type="radio"
            name="type"
            value="friends"
            onChange={() => setType('friends')}
            checked={type === 'friends'}
          />{' '}
            Amigos
          </div>
          <div>
          <input
            type="radio"
            name="type"
            value="public"
            onChange={() => setType('public')}
            checked={type === 'public'}
          />{' '}
            Público
            </div>
        </Type>
         <Buttons><Button onClick={() => setShwoType(false)}>Volver</Button></Buttons>
    </>
)
export default PostType