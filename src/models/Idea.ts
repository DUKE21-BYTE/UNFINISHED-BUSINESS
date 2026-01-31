
import mongoose from 'mongoose';

export interface Idea extends mongoose.Document {
  title: string;
  slug: string;
  problem: string;
  solution: string;
  description: string;
  abandon_reason: string;
  category: string;
  tags: string[];
  status: string;
  license: string;
  created_at: Date;
  likes: number;
  views: number;
  author_name: string;
}

const IdeaSchema = new mongoose.Schema<Idea>({
  title: {
    type: String,
    required: [true, 'Please provide a title for this idea.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  solution: {
    type: String,
    required: true,
  },
  abandon_reason: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  status: {
    type: String,
    default: 'available',
  },
  license: {
    type: String,
    default: 'public-domain',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  author_name: {
    type: String,
    default: 'Anonymous',
  },
});

export default mongoose.models.Idea || mongoose.model<Idea>('Idea', IdeaSchema);
