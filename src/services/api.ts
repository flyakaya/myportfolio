import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example interface for a post
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// API endpoints
export const PostsAPI = {
  getPosts: () => api.get<Post[]>('/posts'),
  getPost: (id: number) => api.get<Post>(`/posts/${id}`),
  createPost: (post: Omit<Post, 'id'>) => api.post<Post>('/posts', post),
  updatePost: (id: number, post: Partial<Post>) => api.put<Post>(`/posts/${id}`, post),
  deletePost: (id: number) => api.delete(`/posts/${id}`),
};

export default api; 