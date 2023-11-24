import { PostsApi } from './postsApi/postsApi';

const postApi = new PostsApi();

export const $api = { ...postApi };
