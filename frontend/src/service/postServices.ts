const API_BASE_URL = import.meta.env.VITE_API_URL;

// Type for CreatePost payload
export interface CreatePostData {
  content: string;
  hashtags?: string[]; // optional
  image: File;
}

// Response type
export interface PostResponse {
  _id: string;
  user: string;
  content: string;
  image: string;
  hashtags: string[];
  likes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export const createPostService = async (data: CreatePostData, token: string): Promise<PostResponse> => {
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
