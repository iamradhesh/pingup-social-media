const API_BASE_URL = import.meta.env.VITE_API_URL;

// Type for CreatePost payload
import type { PostType, PostResponse } from "../types/post";

//create Post service
export const createPostService = async (data: PostType, token: string): Promise<PostResponse> => {
  try {
    const formData = new FormData();
    formData.append('content', data.content);
    if (data.hashtags) formData.append('hashtags', JSON.stringify(data.hashtags));
    formData.append('image', data.image);

    const response = await fetch(`${API_BASE_URL}/posts/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result: PostResponse = await response.json();

    if (!response.ok) {
      throw new Error((result as { message?: string }).message || 'Failed to create post');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unexpected error occurred');
  }
};

//get all posts service
export const getAllPostsService = async (token: string): Promise<PostResponse[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/get`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result: PostResponse[] = await response.json();

    if (!response.ok) {
      throw new Error((result as { message?: string }).message || 'Failed to get posts');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unexpected error occurred');
  }
};

//get user posts service
export const getUserPostsService = async (token: string): Promise<PostResponse[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/user-posts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result: PostResponse[] = await response.json();

    if (!response.ok) {
      throw new Error((result as { message?: string }).message || 'Failed to get user posts');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unexpected error occurred');
  }
};
