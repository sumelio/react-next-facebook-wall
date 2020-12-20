import mongoose from 'mongoose'

/* PostSchema will correspond to a collection in your MongoDB database. */
const PostSchema = new mongoose.Schema({
  text: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a text for this post.'],
    maxlength: [20, 'text cannot be more than 60 characters'],
  }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)