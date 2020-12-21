import {
   createPost as create,
   getPost as get,
   updatePost as update,
   deletePost as removePost,
   getAllPost as getAllByUser }
 from '../services/post.service'

export const createPost = async (req, res) => {
   try {
      const post = await create(req.body)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error('error',error)
      res.status(500).send(error)
   }
}


export const updatePost = async (req, res) => {
   try {
      console.log('id', req.params)
      const post = await update(req.params.id, req.body)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error('error',error)
      res.status(500).send(error)
   }
}

export const deletePost = async (req, res) => {
   try {
      console.log('id', req.params)
      const post = await removePost(req.params.id)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error('error',error)
      res.status(500).send(error)
   }
}

export const getPost = async (req, res) => {

   try {
      const post = await get(req.params.id)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error(error)
      res.status(500).send(error)
   }
}

export const getAllPostByUserId = async (req, res) => {

   try {
      console.log('req.params.userId', req.params.userId)
      const post = await getAllByUser(req.params.userId)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error(error)
      res.status(500).send(error)
   }
}