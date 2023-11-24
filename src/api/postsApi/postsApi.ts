import { Api } from '../api';
import type { IPost } from './postsApi.type';

export class PostsApi extends Api {
  private readonly url = this.baseUrl + '/posts';
  constructor() {
    super();
    this.getPosts = async function (): Promise<IPost[]> {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    };
    this.getPost = async function (id: number): Promise<IPost> {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    };
  }
  getPosts;
  getPost;
}
