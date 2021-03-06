"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPost = exports.getPost = exports.deletePost = exports.updatePost = exports.createPost = void 0;
const post_model_1 = require("../model/post.model");
const post_dto_1 = require("../dto/post.dto");
const createPost = ({ userId, text, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const postDto = new post_dto_1.PostDto(userId, text, type);
    const postModel = new post_model_1.Post(postDto.toObject());
    yield postModel.save();
    return postModel;
});
exports.createPost = createPost;
const updatePost = (_id, { userId, text, type }) => __awaiter(void 0, void 0, void 0, function* () {
    yield post_model_1.Post.updateOne({ _id }, { $set: { text, type } });
    return { _id, userId, text, type };
});
exports.updatePost = updatePost;
const deletePost = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    yield post_model_1.Post.deleteOne({ _id });
    return {};
});
exports.deletePost = deletePost;
const getPost = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const postModel = yield post_model_1.Post.findOne({ _id });
    return postModel;
});
exports.getPost = getPost;
const getAllPost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const postModel = yield post_model_1.Post.find({ userId });
    return postModel;
});
exports.getAllPost = getAllPost;
//# sourceMappingURL=post.service.js.map