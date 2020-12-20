import React from 'react'
import styled from 'styled-components'
import Post from '../components/Post'

const WallContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  width: 100%;
`
const Wall = () => (
  <WallContent>
    <Post></Post>
  </WallContent>
)

export default Wall
