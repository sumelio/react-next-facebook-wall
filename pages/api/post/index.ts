import { IncomingMessage, ServerResponse} from 'http'
import dbConnect from 'utils/dbConnect'
import Post from 'models/Post'


export default async function handler(request: any, response: any)  {
   const { method } = request
 
   await dbConnect()
 
   switch (method) {
     case 'GET':
       try {
         const pets = await Post.find({}) 
         response.status(200).json({ success: true, data: pets })
       } catch (error) {
         response.status(400).json({ success: false })
       }
       break
     case 'POST':
       try {
         const pet = await Post.create(
           request.body
         )
         response.status(201).json({ success: true, data: pet })
       } catch (error) {
         response.status(400).json({ success: false })
       }
       break
     default:
       response.status(400).json({ success: false })
       break
   }
 }