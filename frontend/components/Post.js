import React, { useCallback, useMemo, useState } from 'react'

import PostEdit from './postEdit/PostEdit'

import { updatePost as update } from '../services/postService'
import PostView from './PostView'


const PostContent = ({ edit = true, currentPost, putPost, removePost}) => {

  const [isEdit, setEdit] = useState(edit)
  const [post, setPost] = useState(currentPost)

  const updatePost = useCallback( async (text, type) => {
    let current = {}
      const response  = await update({_id: post._id, data: {...post, text, type}})
      current = {
        ...post,
        ...response.data
      }
      setPost(current)

    
    putPost(current)
  }, [post, setPost, putPost])

  return (
    <>
      {isEdit || !currentPost
       ? <PostEdit post={post} setEdit={setEdit} savePost={updatePost}></PostEdit>
       : <PostView post={post} setEdit={setEdit} removePost={removePost}></PostView>
      }
    </>
  )
}

export default PostContent
