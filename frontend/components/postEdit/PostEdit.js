import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


import PostText from './PostText'
import PostType from './PostType'

const PostEditWrapper = styled.div`
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
const PostEdit = ({ post, setEdit = () => {}, savePost }) => {
  const [text, setText] = useState(post.text)
  const [type, setType] = useState(post.type || 'public')
  const [showType, setShwoType] = useState(false)
  const [isDisableButton, setDisableButton] = useState(!(post && post.text && post.text.length > 0))

  useEffect(() => {
    if (post) {
      setText(post.text)
      setType(post.type || 'public')
    }
  }, [post])

  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value)
      setDisableButton(!(e.target.value && e.target.value.length > 0))
    },
    [text, setText, setDisableButton]
  )
  const createPost = useCallback(() => {
    setEdit(false)
    savePost(text, type)
    setText('')
    setDisableButton(true)
  }, [text, type, setText, setDisableButton])

  return (
    <PostEditWrapper>
      {showType ? (
       <PostType setType={setType} type={type} setShwoType={setShwoType} />
      ) : (
        <PostText
        onChangeText={onChangeText} 
        text={text} 
        postId={post._id}
        setShwoType={setShwoType} 
        type={type} 
        createPost={createPost}
        isDisableButton={isDisableButton}
        />
      )}
    </PostEditWrapper>
  )
}

export default PostEdit
