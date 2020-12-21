
import {Schema, Document, model, Model} from 'mongoose'


const schemaConfig = {
  collection: 'Post',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

interface IPostDocument extends Document {
  userId: string,
  text: string,
  type: string
}

const PostSchema = new Schema<IPostDocument>({
  text: {type: String},
  type: {type: String},
  userId: {type: String}
}, schemaConfig)

export interface IPostModel extends Model<IPostDocument> {
}

export const Post: IPostModel = model<IPostDocument, IPostModel>('Post', PostSchema)

export default Post
