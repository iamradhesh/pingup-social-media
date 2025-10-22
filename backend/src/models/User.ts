import mongoose, { Document, Schema, Model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    profilePic?: string;
    bio?: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

interface IUserModel extends Model<IUser> {
    hashPassword(password: string): Promise<string>;
}

const userSchema = new Schema<IUser, IUserModel>({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true
    },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    bio: { type: String, default: "" },
}, {
    timestamps: true // Automatically handles createdAt and updatedAt
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

// Instance method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// // Static method to hash password (if needed separately)
// userSchema.statics.hashPassword = async function(password: string): Promise<string> {
//     const saltRounds = 10;
//     return bcrypt.hash(password, saltRounds);
// };

const User = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;