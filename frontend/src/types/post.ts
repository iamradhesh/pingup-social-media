export interface User {
  _id: string;
  name: string;
  profilePicture?: string;
}

export interface CommentType {
  _id: string;
  user: User;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostType {
  _id: string;
  user: User; // <-- object, not string
  content: string;
  image: string;
  hashtags: string[];
  likes: string[];
  comments: CommentType[];
  createdAt: string;
  updatedAt: string;
}
export interface PostResponse {
  _id: string;
  user: {
    _id: string;
    name: string;
    profilePicture?: string;
  };
  content: string;
  image: string;
  hashtags: string[];
  likes: string[];
  comments: CommentType[];
  createdAt: string;
  updatedAt: string;
}
