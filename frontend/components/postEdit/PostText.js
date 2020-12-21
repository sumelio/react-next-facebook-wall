import React from 'react'
import styled from 'styled-components'

// Components
import { Buttons, Button } from '../style/button.style'
import CaretDown from '../CaretDown'

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  ::placeholder {
    color: #b5b5b5;
    font-size: 1.5em;
  };
`
const PostType = styled.button`
  display: inline-block;
  padding: 0.2rem 0;
  margin: 1rem 0 0.1rem 0.6rem;
  width: 10rem;
  height: 2.8rem;
  border: 2px solid #b5b5b5;
  outline: 0;
  background-color: #ffffff;
`
const Span = styled.span`
  line-height: 2em;
  vertical-align: top; /* debug FF/IE */
  outline: 0;
`

const PostText = ({ postId, onChangeText, text, setShwoType, type, createPost, isDisableButton = true }) => (
  <>
    <TextArea
      placeholder="¿Qué está pasando?"
      onChange={onChangeText}
      value={text}
    />
    <Buttons>
      <PostType onClick={() => setShwoType(true)}>
        {`${type === 'friends' ? 'Amigos' : 'Público'} `}
        <Span>
          <CaretDown />
        </Span>
      </PostType>
      <Button onClick={createPost} disabled={isDisableButton}>{postId ? 'Guardar': 'Publicar'}</Button>
    </Buttons>
  </>
)

export default PostText