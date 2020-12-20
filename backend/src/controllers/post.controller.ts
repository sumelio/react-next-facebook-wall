import { createPost as create, getPost as get }
 from '../services/post.service'

export const createPost = async (req, res) => {
   try {
      const post = await create(req.body)
      res.json({ code: 'OK', data: post})
   } catch (error) {
      console.error(error)
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