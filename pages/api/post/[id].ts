import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/Post'
import { IncomingMessage, ServerResponse } from 'http'

const end = (res: ServerResponse, statusCode: number, body: any) => {
  res.statusCode = statusCode
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(body))
}
export default async function handler(req: any, res: ServerResponse) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(id)
        if (!post) {
          end(res, 400, { success: false })
        }
        end(res, 200, { success: true, data: post })
      } catch (error) {
        end(res, 400, { success: false })
      }
      break

    case 'PUT':
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!post) {
          end(res, 400, { success: false })
        }
        end(res, 200, { success: true, data: post })
      } catch (error) {
        end(res, 400, { success: false })
      }
      break

    case 'DELETE':
      try {
        const deletedpost = await Post.deleteOne({ _id: id })
        if (!deletedpost) {
          end(res, 400, { success: false })
        }
        end(res, 200, { success: true, data: {} })
      } catch (error) {
        end(res, 400, { success: false })
      }
      break

    default:
      end(res, 400, { success: false })
      break
  }
}