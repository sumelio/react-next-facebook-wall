import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import CaretDown from './CaretDown'

const PostContent = styled.div`
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

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  ::placeholder {
    color: #b5b5b5;
    font-size: 1.5em;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-start;
  width: 100%;
`
const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 0.2rem 0;
  margin: 1rem 0 0.1rem 0.6rem;
  width: 10rem;
  height: 2.8rem;
  background: transparent;
  border: 2px solid #b5b5b5;
  background-color: #e9e8e8;
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
const Post = () => {
  const [text, setText] = useState('')
  const [isEdit, setEdit] = useState(true)
  const onChangeText = useCallback(
    (e) => {
      console.log(e.target.value)
      setText(e.target.value)
    },
    [text, setText]
  )
  const createPost = useCallback(() => {
    setEdit(false)
  }, [text, setText])
  return (
    <PostContent>
      {isEdit ? 
        <>
        <TextArea
          id="w3review"
          name="w3review"
          placeholder="¿Qué está pasando?"
          onChange={onChangeText}
          
        >{text}</TextArea>
     
      <Buttons>
        <PostType>
          Amigos{' '}
          <Span>
            <CaretDown />
          </Span>
        </PostType>
        <Button onClick={() => createPost()}>publicar</Button>
      </Buttons>
        </>
      :  <>
        <p>{text}</p>
        <Button onClick={() => setEdit(true)}>Edit</Button>
        </>
      }
    </PostContent>
  )
}

export default Post
