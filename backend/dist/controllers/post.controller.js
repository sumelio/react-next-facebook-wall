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
exports.getAllPostByUserId = exports.getPost = exports.deletePost = exports.updatePost = exports.createPost = void 0;
const post_service_1 = require("../services/post.service");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_service_1.createPost(req.body);
        res.json({ code: 'OK', data: post });
    }
    catch (error) {
        console.error('error', error);
        res.status(500).send(error);
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('id', req.params);
        const post = yield post_service_1.updatePost(req.params.id, req.body);
        res.json({ code: 'OK', data: post });
    }
    catch (error) {
        console.error('error', error);
        res.status(500).send(error);
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('id', req.params);
        const post = yield post_service_1.deletePost(req.params.id);
        res.json({ code: 'OK', data: post });
    }
    catch (error) {
        console.error('error', error);
        res.status(500).send(error);
    }
});
exports.deletePost = deletePost;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_service_1.getPost(req.params.id);
        res.json({ code: 'OK', data: post });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.getPost = getPost;
const getAllPostByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('req.params.userId', req.params.userId);
        const post = yield post_service_1.getAllPost(req.params.userId);
        res.json({ code: 'OK', data: post });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.getAllPostByUserId = getAllPostByUserId;
//# sourceMappingURL=post.controller.js.map