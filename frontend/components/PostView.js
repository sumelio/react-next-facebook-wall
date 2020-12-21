import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { deletePost } from '../services/postService'

import { Button, Buttons } from './style/button.style'

const PostViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  border: 2px solid #b5b5b5;
  width: 32vw;
  height: 20vh;
  padding: 10px;
`
const P = styled.p`
  text-align: left;
  width: 100%;
  height: 100%;
`

const A = styled.a`
  cursor: pointer;
  padding: 6px;
`

const PostView = ({ setEdit, post, removePost }) => {
  const [isConfirmationRemove, setConfirmationRemove] = useState(false)
  const remove = useCallback(async () => {
    try {
      const response = await deletePost({ _id: post.id })
      console.log(response)
      removePost({ _id: post.id })
    } catch (error) {
      console.error(response)
    }
  }, [post])

  return (
    <PostViewWrapper>
      {isConfirmationRemove ? (
        <div>
          {' '}
          ¿Estas seguro de eliminar este post?
          <Buttons justify="left">
            <Button onClick={() => setConfirmationRemove(false)}>No</Button>
            <Button onClick={remove}>Si</Button>
          </Buttons>
        </div>
      ) : (
        <>
          <P>{post.text}</P>
          <Buttons justify="left">
            <A onClick={() => setEdit(true)}>Editar</A>
            <A onClick={() => setConfirmationRemove(true)}>Eliminar</A>
          </Buttons>
        </>
      )}
    </PostViewWrapper>
  )
}

export default PostView
