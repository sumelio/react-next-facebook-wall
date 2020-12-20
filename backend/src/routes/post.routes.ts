import { SERVICE_NAME } from '../config';
import * as controller from '../controllers/post.controller'

export const routes = (app) => {
    app.post(`/v1/${SERVICE_NAME}/api/post`, controller.createPost);
    app.get(`/v1/${SERVICE_NAME}/api/post/:id`, controller.getPost);
}