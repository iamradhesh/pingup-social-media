import mongoose ,{Document,Schema, Types} from "mongoose";

export interface IPost extends Document {
    user: Types.ObjectId;              // Reference to User
  content: string;                   // Text content of post
  image?: string;                    // Optional image
  likes: Types.ObjectId[];           // Array of user IDs who liked
  comments: {
    user: Types.ObjectId;
    text: string;
    createdAt: Date;
  }[];
  hashtags?: string[];               // Optional hashtags
  createdAt: Date;
  updatedAt: Date;
}
const postSchema = new Schema<IPost>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    image: { type: String , default: ""},
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ],
    hashtags: [{ type: String }],
    
},{ timestamps: true } // Automatically manages createdAt and updatedAt
);

const Post = mongoose.model<IPost>("Post", postSchema);

export default Post;