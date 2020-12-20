import { Post } from '../model/post.model';
import { PostDto } from '../dto/post.dto';

export const createPost = async ({ userId, text, type }) => {
   const postDto = new PostDto(userId, text, type)

   const postModel = new Post(postDto.toObject())
   await postModel.save()
   return postModel
}

export const getPost = async (id) => {

   const postModel = await Post.findOne({_id: id})

   return postModel
}
