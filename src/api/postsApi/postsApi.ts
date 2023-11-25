import { Api } from '../api';
import type { IPost } from './postsApi.type';

export class PostsApi extends Api {
  private readonly url;
  constructor(postsUrl: string) {
    super();
    this.url = this.baseUrl + postsUrl;
    this.getPosts = this.getEntity<IPost[]>(this.url);
    this.getPost = (id: number | string) => this.getEntity<IPost>(this.url, id);
  }
  getPosts;
  getPost;
}
