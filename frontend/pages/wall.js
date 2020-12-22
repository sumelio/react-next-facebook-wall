import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

// Component
import Post from '../components/Post'
import PostEdit from '../components/postEdit/PostEdit'
import { Buttons } from '../components/style/button.style'
import { createPost, getAllPost } from '../services/postService'

const WallContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin:auto;
  width: 32vw;
`

const Item = styled.div`
  padding-bottom: 40px;
`

const A = styled.i`
  cursor: pointer;
  padding: 6px;
`
const Wall = () => {
  const [posts, setPosts] = useState({})
  const [newPost, setNewPost] = useState({})
  const [filter, setFilter] = useState({ type: undefined})

  useEffect(() => {
    const load = async () => {
      const req = await getAllPost({userId: 1})
      const postArray = [...req.data]
      setPosts(postArray.reduce( (acc, item) => {
          acc[item._id] = item
          return acc

      }, {} ))
    }
    load()
  }, [])

  const putPost = useCallback(
    (post) => {
      setPosts({
        ...posts,
        [post._id]: post,
      })
    },
    [posts, setPosts]
  )

  const savePost = useCallback(
    async (text, type) => {

      const response = await createPost({
        data: { userId: 1, text, type },
      })
 
      putPost({
        ...response.data,
      })
      setNewPost({})
    },
    [newPost, putPost, setNewPost]
  )

  const sortPost = (a, b) => {
    const dateA = new Date(posts[a].createdAt)
    const dateB = new Date(posts[b].createdAt)
    return dateB.getTime() > dateA.getTime() ? 1 : -1
  }

  const removePost = useCallback( ({_id}) => {
   const postsUpdated = { ...posts}
   delete postsUpdated[_id]
   setPosts({
     ...postsUpdated
   })
  }, [posts, setPosts])

  const mapPost = (key) => (
    <Item><Post key={key} currentPost={posts[key]} edit={false} putPost={putPost} removePost={removePost}></Post></Item>
  )

  const filterPost = (key) =>  !filter.type || posts[key].type ===  filter.type
   
  return (
    <WallContent>
      <PostEdit post={newPost} savePost={savePost}></PostEdit>
      <Buttons justify='left'>
        <A onClick={() => setFilter({type:'public'})}>Público</A>
        <A onClick={() => setFilter({type:'friends'})}>Amigos</A></Buttons>
      {Object.keys(posts)
        .sort(sortPost)
        .filter(filterPost)
        .map(mapPost)}
    </WallContent>
  )
}

export default Wall
