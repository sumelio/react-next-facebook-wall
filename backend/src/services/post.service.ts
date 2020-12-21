import { Post } from '../model/post.model';
import { PostDto } from '../dto/post.dto';

export const createPost = async ({ userId, text, type }) => {
   const postDto = new PostDto(userId, text, type)
   const postModel = new Post(postDto.toObject())
   await postModel.save()
   return postModel
}

export const updatePost = async ( _id, {userId, text, type }) => {
   await Post.updateOne({ _id }, { $set: { text, type } })
   return { _id, userId, text, type }
}

export const deletePost = async ( _id ) => {
   await Post.deleteOne({ _id })
   return {}
}

export const getPost = async (_id) => {
   const postModel = await Post.findOne({ _id })
   return postModel
}

export const getAllPost = async (userId) => {
   const postModel = await Post.find({userId})
   return postModel
}
