import { AuthApi } from './authApi/authApi';
import { PostsApi } from './postsApi/postsApi';

const postApi = new PostsApi('/posts');
const authApi = new AuthApi('/posts');

export const $api = { ...postApi, ...authApi };
